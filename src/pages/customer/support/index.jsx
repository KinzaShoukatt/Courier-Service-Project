import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { ChatbotWrapper } from "./style";
import Logo from "../../../assets/images/LogoWhite.png";
import UseCustomer from "../useHooks";

const SOCKET_URL = process.env.REACT_APP_WS;

const Support = () => {
  const token = localStorage.getItem("loginToken");

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  const { ChatGet, deleteChat } = UseCustomer();
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize Socket.IO connection
  useEffect(() => {
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    if (socketRef.current) return;
    console.log("Connecting to socket:", `${SOCKET_URL}/chat`);

    const socket = io(`${SOCKET_URL}/chat`, {
      query: { token },
      transports: ["websocket"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to chat namespace");
      setIsConnected(true);
      fetchPreviousChat();
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from chat namespace");
      setIsConnected(false);
    });

    // Handle incoming messages
    socket.on("receiveMessage", (data) => {
      if (data.sentBy === "customer") return;
      console.log("Message received:", data);
      setMessages((prev) => [
        ...prev,
        {
          sender: "user",
          text: data.message,
        },
      ]);
    });

    // Handle server errors
    socket.on("chatError", (err) => {
      console.error("Chat error:", err);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  const fetchPreviousChat = async () => {
    try {
      const response = await ChatGet();
      if (response && response.messages) {
        const formatted = response.messages.map((msg) => ({
          sender: msg.sentBy === "customer" ? "customer" : "user",
          text: msg.message,
        }));
        setMessages(formatted);
      } else {
        console.log("No previous messages found");
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  // Send user message
  const sendMessage = () => {
    if (!input.trim() || !isConnected) return;

    const message = input.trim();
    setMessages((prev) => [...prev, { sender: "customer", text: message }]);
    setInput("");
    setIsTyping(true);

    // Send to server
    socketRef.current.emit("sendMessage", {
      message,
      receiverId: 2,
    });

    setTimeout(() => setIsTyping(false), 300);
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <ChatbotWrapper>
      <div className="chat-container">
        <div className="devgo">
          <img src={Logo} alt="Logo" />
          <p>DEVGO Chat With Admin</p>
        </div>

        <div className="messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.sender === "customer" ? "customer-message" : "admin-message"
              }
            >
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}

          {/* {isTyping && <div className="bot-message typing">...</div>} */}

          <div ref={messagesEndRef} />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </ChatbotWrapper>
  );
};

export default Support;
