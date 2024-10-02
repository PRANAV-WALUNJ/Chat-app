import React, { useState } from 'react';
import { Button, Col, Form, Row, Card } from 'react-bootstrap';

const Waitingroom = (props: any) => {
    const { joinChatRoom } = props;
    const [username, setUsername] = useState('');
    const [chatroom, setChatroom] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username && chatroom) {
            joinChatRoom(username, chatroom);
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <Card className="p-4 shadow-sm">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Col sm={12}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mb-3"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Chatroom"
                                value={chatroom}
                                onChange={(e) => setChatroom(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="text-center">
                        <Button variant="success" type="submit">
                            Join Chatroom
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default Waitingroom;
