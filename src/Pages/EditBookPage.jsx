import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";

function EditBookPage({ book }) {
  const { editBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedBook = {
      title: title,
      author: author,
      category: category,
      isbnNumber: isbnNumber,
      explanation: explanation,
    };
    if (
      title !== "" &&
      author !== "" &&
      category !== "" &&
      isbnNumber !== "" &&
      explanation !== ""
    ) {
      handleEdit(book, editedBook);
      setTitle("");
      setAuthor("");
      setCategory("");
      setIsbnNumber("");
      setExplanation("");
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

  const handleEdit = async (id) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(id),
    });

    await editBook();
    console.log("Book updated: ", book);
  };

  return (
    <div className="container mt-5">
      <Button className="edit-button" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
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
                  defaultValue={book.title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
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
                  defaultValue={book.author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
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
                  defaultValue={book.category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
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
                  defaultValue={book.isbnNumber}
                  onChange={(e) => setIsbnNumber(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
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
                  defaultValue={book.explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
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
                  Save Book
                </Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export { EditBookPage };
