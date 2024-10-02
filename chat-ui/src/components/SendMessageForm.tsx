import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { measureMemory } from "vm";

const SendMessageForm = (props: any) => {
  const { sendMessage } = props;
  const [message, setMessage] = useState("");

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >

        <InputGroup className="mb-3">
        <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control onChange={e=>setMessage(e.target.value)} value={message} placeholder="Type a message"></Form.Control>
        <Button variant="primary" type="submit" disabled={!message}>Send</Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SendMessageForm;
