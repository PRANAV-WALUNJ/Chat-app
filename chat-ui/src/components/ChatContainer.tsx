import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Waitingroom from "./Waitingroom";
import Chatroom from "./Chatroom";
import FriendChat from "./FriendChat";
import "./css/Home.css"

interface ChatContainerProps {
  conn: any;
  messages: any[];
  sendMessage: (message: any) => void;
  JoinChatRoom: (username: string, chatroom: string) => Promise<void>;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ conn, messages, sendMessage, JoinChatRoom }) => {
  const [view, setView] = useState<"joinChat" | "friendChat" | null>(null);

  const handleJoinChatRoom = () => {
    setView("joinChat");
  };

  const handleFriendChat = () => {
    setView("friendChat");
    // This will be implemented later for chatting with a friend
  };

  return (
    <div>
      {!view && (
        <div>
          <Button variant="primary" onClick={handleJoinChatRoom} className="start-chat-btn">
            Join Chat Room
          </Button>
          <Button variant="secondary" onClick={handleFriendChat} className="start-chat-btn-friend">
            Chat with Friend
          </Button>
        </div>
      )}

      {view === "joinChat" && (
        <>
          {!conn ? (
            <Waitingroom joinChatRoom={JoinChatRoom} />
          ) : (
            <Chatroom messages={messages} sendMessage={sendMessage} />
          )}
        </>
      )}

      {view === "friendChat" && (
        <FriendChat/>
      )}
    </div>
  );
};

export default ChatContainer;
