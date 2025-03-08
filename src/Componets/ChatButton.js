import React, { useState } from "react";
import "./ChatButton.css";
import { MessageCircle } from "lucide-react";
import ChatPanel from "./ChatPanel"; // Import ChatPanel component

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="chat-button" onClick={() => setIsChatOpen(!isChatOpen)}>
        <MessageCircle size={24} />
        <span>Chat with customers</span>
      </div>

      {isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default ChatButton;
