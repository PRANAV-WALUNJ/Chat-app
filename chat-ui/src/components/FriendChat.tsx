import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

interface FriendChatProps {
  messages: { username: string; msg: string }[];
  sendMessage: (message: string) => void;
}

const FriendChat: React.FC<FriendChatProps> = ({ messages, sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <Container>
      <h3>Chat with Friends</h3>
      <ListGroup className="mb-3">
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>
            <strong>{msg.username}:</strong> {msg.msg}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleSendMessage}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default FriendChat;
