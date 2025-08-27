import React from "react";
import axios from "axios";
import { ChatbotWrapper } from "./style";

import { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/images/LogoWhite.png";

import { BiHomeAlt } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";

const API_BASE = "http://127.0.0.1:8000/api";
const Support = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selected, setSelected] = useState("msg");

  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show welcome message once
  useEffect(() => {
    const welcome =
      "👋 Welcome! Here’s what I can help you with today:\n" +
      "⑴ Booking Help\n⑵ Track Order\n⑶ Cancel Order\n⑷ Reschedule Order\n⑸ FAQ\n\n" +
      "Please type the number of your choice:";
    setMessages([{ sender: "bot", text: welcome }]);
  }, []);

  // Send user message
  const sendMessage = async (customMessage) => {
    const msgToSend = customMessage || input.trim();
    if (!msgToSend) return;

    setMessages((prev) => [...prev, { sender: "user", text: msgToSend }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(`${API_BASE}/chat/`, {
        message: msgToSend,
        session_id: sessionId,
      });

      const { reply, session_id, buttons: newButtons } = response.data;
      if (session_id) setSessionId(session_id);

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setButtons(newButtons || []);
      setIsTyping(false);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error contacting server." },
      ]);
      setIsTyping(false);
    }
  };

  // Handle FAQ button click
  const handleFAQClick = async (faqText) => {
    setMessages((prev) => [...prev, { sender: "user", text: faqText }]);
    setIsTyping(true);

    try {
      const response = await axios.post(`${API_BASE}/chat/`, {
        faq_text: faqText,
        session_id: sessionId,
      });

      const { reply, session_id, buttons: newButtons } = response.data;
      if (session_id) setSessionId(session_id);

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setButtons(newButtons || []);
      setIsTyping(false);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error contacting server." },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <ChatbotWrapper>
      <div className="chat-container">
        <div className="devgo">
          <img src={Logo} alt="" />
          <p>DEVGO ChatBox</p>
        </div>

        {selected === "home" && (
          <div className="homee">
            <div className="box">
              <p>⑴ Booking Help</p>
            </div>
            <div className="box">
              <p>⑵ Track Order</p>
            </div>
            <div className="box">
              <p>⑶ Cancel Order</p>
            </div>
            <div className="box">
              <p>⑷ Reschedule Order</p>
            </div>
            <div className="box">
              <p>⑸ FAQ</p>
            </div>
          </div>
        )}

        {selected === "msg" && (
          <div className="messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }
              >
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="bot-message typing">Bot is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* FAQ / Quick Buttons */}
        {buttons.length > 0 && (
          <div className="button-section">
            {buttons.map((btn, idx) => (
              <button key={idx} onClick={() => handleFAQClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
        )}

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
        <div className="homeMsg">
          <BiHomeAlt 
            className={`home ${selected === "home" ? "active" : ""}`}
            onClick={() => setSelected("home")}
            color="#006769"
            size={25}
          />

          <LuMessageCircle
            className={`msg ${selected === "msg" ? "active" : ""}`}
            onClick={() => setSelected("msg")}
            color="#006769"
            size={25}
          />
        </div>
      </div>
    </ChatbotWrapper>
  );
};

export default Support;
