import React, { useEffect, useState, useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

function RequestPopOverPage() {
  const { isAuthenticated, user } = useAuth0();
  const { currentUser, getUserByEmail } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  async function init() {
    await getUserByEmail(user?.email);
  }

  useEffect(() => {
    if (isAuthenticated) {
      init();
    }
  }, [isAuthenticated, currentUser?.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleClose();
  };

  return (
    <div className="container mt-5">
      <Button className="add-new-book-button" onClick={handleShow}>
        Request
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="notice">Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <h2 className="request-pop-over-h2">You must be logged in to request a book.</h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <LoginButton />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { RequestPopOverPage };
