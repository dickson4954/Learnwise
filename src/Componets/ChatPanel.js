import React, { useState } from "react";
import "./ChatPanel.css"; // Ensure this file contains styling

const ChatPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const newOrders = [{ id: "7188942", title: "What the researchers did..." }];
  const previousOrders = [{ id: "6123412", title: "Final report submission" }];

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages((prev) => ({
      ...prev,
      [selectedOrder.id]: [
        ...(prev[selectedOrder.id] || []),
        { text: newMessage, sender: "me" },
      ],
    }));
    setNewMessage(""); 
  };

  return (
    <div className="chat-panel">
      {/* Header */}
      <div className="chat-header">
        <h3>Chat with customers</h3>
        <button onClick={onClose}>✖</button>
      </div>

      {/* Tabs */}
      {!selectedOrder && (
        <div className="chat-tabs">
          <span
            className={activeTab === "new" ? "active" : ""}
            onClick={() => {
              setActiveTab("new");
              setSelectedOrder(null);
            }}
          >
            New Orders
          </span>
          <span
            className={activeTab === "previous" ? "active" : ""}
            onClick={() => {
              setActiveTab("previous");
              setSelectedOrder(null);
            }}
          >
            Previous Orders
          </span>
        </div>
      )}

      {/* Orders List or Chat View */}
      <div className="chat-content">
        {selectedOrder ? (
          <div className="chat-box">
            <button className="back-button" onClick={() => setSelectedOrder(null)}>⬅ Back</button>
            <h4>Chat with customer {selectedOrder.id}</h4>

            {/* Chat Messages */}
            <div className="message-container">
              <div className="message received">
                <p>Hello! I have received your order.</p>
              </div>
              {(messages[selectedOrder.id] || []).map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Fixed Input Field */}
            <div className="message-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>➤</button>
            </div>
          </div>
        ) : (
          (activeTab === "new" ? newOrders : previousOrders).map((order) => (
            <div
              key={order.id}
              className="order-item"
              onClick={() => setSelectedOrder(order)}
            >
              <span>⬇</span>
              <p>{order.id} - {order.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatPanel;
