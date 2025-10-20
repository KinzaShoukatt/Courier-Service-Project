import React from "react";
import axios from "axios";
import { ChatbotWrapper } from "./style";

import { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/images/LogoWhite.png";

import { TbHomeFilled } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { showSuccess } from "../../../utils/toast";

const RASA_URL = process.env.REACT_APP_RASA_URL;
function getSenderId() {
  let senderId = localStorage.getItem("rasa_sender_id");
  if (!senderId) {
    senderId = "user_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("rasa_sender_id", senderId);
  }
  return senderId;
}
const AIChatboox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [buttons, setButtons] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selected, setSelected] = useState("msg");

  const messagesEndRef = useRef(null);
  const location = useLocation();

  const formatMessageWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      '<a href="$1" rel="noopener noreferrer">$1</a>'
    );
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //  welcome message
  useEffect(() => {
    const savedMessages = localStorage.getItem("chat_history");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      const welcome =
        "👋 Welcome! Here’s what I can help you with today:\n" +
        " Booking Help\n Track Order\n Cancel Order\n FAQ\n\n" +
        "Please type the number of your choice:";
      setMessages([{ sender: "bot", text: welcome }]);
    }
  }, []);

  useEffect(() => {
    if (messages) {
      localStorage.setItem("chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const status = url.get("status");
    const parcelId = url.get("parcel_id");
    if (status === "success" && parcelId) {
      showSuccess("Your payment has been completed successfully!");
    }
  }, [location.search]);

  // Send user message
  const sendMessage = async (customMessage) => {
    const msgToSend = customMessage || input.trim();
    if (!msgToSend) return;

    setMessages((prev) => [...prev, { sender: "user", text: msgToSend }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(RASA_URL, {
        sender: getSenderId(),
        message: msgToSend,
        metadata: {
          auth_token: localStorage.getItem("loginToken") || null,
        },
      });
      const rasaReplies = response.data;

      if (rasaReplies && rasaReplies.length > 0) {
        rasaReplies.forEach((msg) => {
          if (msg.text) {
            setMessages((prev) => [...prev, { sender: "bot", text: msg.text }]);
          }
          if (msg.buttons) {
            const buttonTitles = msg.buttons.map((b) => b.title);
            setButtons(buttonTitles);
          }
        });
      }

      setIsTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error contacting chatbot server." },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };
  const handleHomeOptions = (text) => {
    setSelected("msg");
    sendMessage(text);
  };

  return (
    <ChatbotWrapper>
      <div className="chat-container">
        <div className="devgo">
          <img src={Logo} alt="" />
          <p>DEVGO CHATBOT</p>
        </div>

        {selected === "home" && (
          <div className="homee">
            <div
              className="box"
              onClick={() => handleHomeOptions("Booking help")}
            >
              <p>Booking Help</p>
            </div>
            <div
              className="box"
              onClick={() => handleHomeOptions("Track Order")}
            >
              <p>Track Order</p>
            </div>
            <div
              className="box"
              onClick={() => handleHomeOptions("Cancel Order")}
            >
              <p>Cancel Order</p>
            </div>
            <div className="box" onClick={() => handleHomeOptions("FAQ")}>
              <p>FAQ</p>
            </div>
          </div>
        )}

        {selected === "msg" && (
          <>
            <div className="messages">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={
                    msg.sender === "bot" ? "bot-message" : "user-message"
                  }
                >
                  {/* {msg.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))} */}
                  {msg.text.split("\n").map((line, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: formatMessageWithLinks(line),
                      }}
                    />
                  ))}
                </div>
              ))}
              {isTyping && (
                <div className="bot-message typing">Bot is typing...</div>
              )}
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
              <button onClick={() => sendMessage()}>Send</button>
            </div>
          </>
        )}

        <div className="homeMsg">
          <div
            className={`home ${selected === "home" ? "active" : ""}`}
            onClick={() => setSelected("home")}
          >
            <TbHomeFilled color="#006769" size={25} />
            Home
          </div>
          <div
            className={`msg ${selected === "msg" ? "active" : ""}`}
            onClick={() => setSelected("msg")}
          >
            <IoChatbubbleEllipses color="#006769" size={25} />
            Chat
          </div>
        </div>
      </div>
    </ChatbotWrapper>
  );
};

export default AIChatboox;
