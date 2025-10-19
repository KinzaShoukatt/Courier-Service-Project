import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { ChatbotWrapper } from "./style";
import Logo from "../../../assets/images/LogoWhite.png";

import { HiSearch } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import UseAdmin from "../useHooks";

const SOCKET_URL = process.env.REACT_APP_WS;

const AdminChat = () => {
  const token = localStorage.getItem("loginToken");

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showChat, setShowChat] = useState(false);

  const { ChatGet, customersRoom, chatRead } = UseAdmin();

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // Initialize socket connection
  useEffect(() => {
    if (!token) {
      console.error("No token found for admin");
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
      console.log("Admin connected to chat namespace");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Admin disconnected");
      setIsConnected(false);
    });

    socket.on("receiveMessage", (data) => {
      console.log("Message received:", data);

      // Auto-select this customer if no one is selected
      if (data.sentBy === "admin") return;

      if (!selectedCustomer) setSelectedCustomer(data.customerId);

      setMessages((prev) => [
        ...prev,
        {
          sender: data.sentBy === "admin" ? "admin" : "customer",
          text: data.message,
          customerId: data.customerId,
        },
      ]);
    });

    socket.on("chatError", (err) => {
      console.error("Chat error:", err);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  // Join customer room and fetch previous messages
  const joinCustomerRoom = async (customerId) => {
    if (!socketRef.current || !isConnected) return;

    console.log(`Joining chat room for customer ${customerId}`);
    socketRef.current.emit("joinAdminChat", customerId);
    setSelectedCustomer(customerId);

    setCustomers((prev) =>
      prev.map((cust) =>
        cust.customerId === customerId ? { ...cust, unreadCount: 0 } : cust
      )
    );

    try {
      await chatRead(customerId);
    } catch (err) {
      console.error("Failed to reset unread count on backend:", err);
    }

    try {
      const response = await ChatGet(customerId);
      if (response && response.messages) {
        const formattedMessages = response.messages.map((msg) => ({
          sender: msg.sentBy === "admin" ? "admin" : "customer",
          text: msg.message,
          customerId: msg.customerId,
        }));

        setMessages((prev) => {
          // Remove old messages of the same customer before merging
          const filtered = prev.filter((m) => m.customerId !== customerId);
          return [...filtered, ...formattedMessages];
        });

        // Auto-scroll to bottom after messages load
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        console.log("ℹNo previous messages for this customer");
        setMessages((prev) => prev.filter((m) => m.customerId !== customerId));
      }
    } catch (error) {
      console.error("Error fetching previous chat:", error);
    }
  };

  // Send message
  const sendMessage = () => {
    if (!input.trim() || !selectedCustomer || !isConnected) return;

    const message = input.trim();
    socketRef.current.emit("sendMessage", {
      message,
      receiverId: selectedCustomer,
    });
    setMessages((prev) => [
      ...prev,
      { sender: "admin", text: message, customerId: selectedCustomer },
    ]);
    setInput("");
  };

  //  Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Fetch customers list
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await customersRoom();
        if (Array.isArray(response)) {
          setCustomers(response);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  // Filter messages for selected customer
  const filteredMessages = selectedCustomer
    ? messages.filter((m) => m.customerId === selectedCustomer)
    : [];

  const filteredCustomers = customers.filter((cust) => {
    return cust.customerName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const highlight = (name) => {
    if (!searchTerm) return name;
    const lowerName = name.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    const index = lowerName.indexOf(lowerSearch);
    if (index === -1) return name;

    const before = name.substring(0, index);
    const match = name.substring(index, index + searchTerm.length);
    const after = name.substring(index + searchTerm.length);
    return (
      <>
        <span style={{ whiteSpace: "nowrap" }}>
          {before}
          <mark style={{ backgroundColor: "yellow", padding: 0 }}>{match}</mark>
          {after}
        </span>
      </>
    );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ChatbotWrapper>
      <div className="chat-container">
        <div className="devgo">
          <img src={Logo} alt="Logo" />
          <p>DEVGO Admin Chat Panel</p>
        </div>

        {/*  Customer list */}
        <div className="parent">
          {(!isMobile || !showChat) && (
            <div className="customer-list">
              <div className="searchDiv">
                <HiSearch color="#006769" />
                <input
                  className="text"
                  placeholder="search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </div>

              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((cust) => (
                  <div className="listOfCustomers" key={cust.customerId}>
                    <button
                      onClick={() => {
                        joinCustomerRoom(cust.customerId);
                        if (isMobile) setShowChat(true);
                      }}
                      className={[
                        cust.unreadCount > 0 ? "haveCount" : "noCount",
                        selectedCustomer === cust.customerId ? "active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {highlight(cust.customerName)}
                      {cust.unreadCount > 0 && (
                        <span className="count">{cust.unreadCount}</span>
                      )}
                    </button>
                  </div>
                ))
              ) : (
                <p style={{ padding: "10px", color: "#666" }}>
                  No customers found
                </p>
              )}
            </div>
          )}

          {(!isMobile || showChat) && (
            <div className="rightChild">
              {isMobile && (
                <button className="backBtn" onClick={() => setShowChat(false)}>
                  <HiArrowLeft size={18} /> Back
                </button>
              )}

              <div className="messages">
                {filteredMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={
                      msg.sender === "admin"
                        ? "admin-message"
                        : "customer-message"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder={
                    selectedCustomer
                      ? "Type a message..."
                      : "Select a customer first..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  // disabled={!selectedCustomer}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ChatbotWrapper>
  );
};

export default AdminChat;
