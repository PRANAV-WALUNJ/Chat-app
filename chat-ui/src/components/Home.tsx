import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Chatroom from "./Chatroom";
import FriendChat from "./FriendChat";
import "./css/Home.css";
import Waitingroom from "./Waitingroom";
import ChatContainer from "./ChatContainer";

interface HomeProps {
  conn: any;
  messages: any[];
  sendMessage: (message: any) => void;
  JoinChatRoom: (username: string, chatroom: string) => Promise<void>;
}

const Home: React.FC<HomeProps> = ({ conn, messages, sendMessage, JoinChatRoom }) => {

  return (
    <div className="home-page">
      <div className="overlay">
        <Container className="text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <Row>
            <Col>
              <h1 className="display-4 text-white">Welcome to the Interactive Chat App</h1>
              <p className="lead text-white mb-4">Connect with your friends and colleagues instantly.</p>
              
              <ChatContainer
                conn={conn}
                messages={messages}
                sendMessage={sendMessage}
                JoinChatRoom={JoinChatRoom}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
