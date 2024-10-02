import React from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';

const Chatroom = (props: any) => {
    const { messages, sendMessage } = props;

    return (
        <Container fluid className="p-4 bg-light">
            <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                    <Row>
                        <Col sm={10}>
                            <h2>ChatRoom</h2>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-4">
                    <MessageContainer messages={messages} />
                    <SendMessageForm sendMessage={sendMessage} />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Chatroom;
