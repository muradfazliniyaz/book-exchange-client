import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";

function AddBookPage() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [explanation, setExplanation] = useState("");
  const [userId, setUserId] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: title,
      author: author,
      category: category,
      isbnNumber: isbnNumber,
      explanation: explanation,
      userId: userId,
    };
    if (
      title !== "" &&
      author !== "" &&
      category !== "" &&
      isbnNumber !== "" &&
      explanation !== "" &&
      userId !== ""
    ) {
      addBook(newBook);
      setTitle("");
      setAuthor("");
      setCategory("");
      setIsbnNumber("");
      setExplanation("");
      setUserId("");
      handleClose();
    } else {
      swal("Please enter all of information!");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <Button className="add-new-book-button" onClick={handleShow}>Add a New Book</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <form
              onSubmit={handleSubmit}
              className="border border-1 p-3 rounded mt-5"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter the Book Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Author
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter Author Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter Category"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  ISBN Number
                </label>
                <input
                  type="text"
                  value={isbnNumber}
                  onChange={(e) => setIsbnNumber(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Enter ISBN Number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  User ID
                </label>
                <input
                  type="number"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Enter User ID"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Explanation
                </label>
                <textarea
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Enter Explanation"
                />
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  data-testid="add-button"
                  type="submit"
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Add Book
                </Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export { AddBookPage };
