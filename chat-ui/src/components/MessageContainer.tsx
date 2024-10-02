import React from 'react';
import { Table } from 'react-bootstrap'; 

const MessageContainer = (props: any) => {
  const { messages } = props;
  console.log(messages, "testdata");

  return (
    <div style={{ margin: '20px', padding: '10px' }}>
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>Message</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg: any, index: any) => (
            <tr key={index}>
              <td>{msg.msg}</td>
              <td>{msg.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MessageContainer;
