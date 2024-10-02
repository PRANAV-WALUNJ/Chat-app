import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Message {
  username: string;
  msg: string;
}

function App() {
  const [conn, setConnection]: any = useState();
  const [messages, setMessages] = useState<Message[]>([]);

  const JoinChatRoom = async (username: string, chatroom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7160/chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("ReceiveMessage", (username, msg) => {
        setMessages((prevMessages) => [...prevMessages, { username, msg }]);
      });

      conn.on("ReceiveSpecificMessage", (username: string, msg: string) => {
        setMessages((prevMessages) => [...prevMessages, { username, msg }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
      setConnection(conn);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (message: any) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Home
        conn={conn}
        messages={messages}
        sendMessage={sendMessage}
        JoinChatRoom={JoinChatRoom}
      />
    </div>
  );
}

export default App;
