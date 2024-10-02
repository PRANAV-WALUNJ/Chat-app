import React, { useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

const FriendChat: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSearchFriend = () => {
    setLoading(true);
    setShowModal(false);

    // Simulating a delay of 4 seconds (4000ms) to display the loader
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 4000);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="text-center">
      <h2 className="mb-4" style={{ color: "white" }}>Friend Chat</h2>
      <Button variant="info" onClick={handleSearchFriend} disabled={loading}>
        {loading ? (
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        ) : (
          "Search Friend Globally"
        )}
      </Button>

      {/* Loader that shows when loading is true */}
      {loading && (
        <div className="mt-4">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <p className="mt-2" style={{ color: "green" }}>Searching for friends...</p>
        </div>
      )}

      {/* Modal to show the "No friends found" message */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>No Friends Found</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sorry, no friends were found. Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSearchFriend}>
            Retry Again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FriendChat;
