import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";

function EditBookPage({ book }) {
  const { editBook } = useContext(BookContext);

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);
  const [isbnNumber, setIsbnNumber] = useState(book.isbnNumber);
  const [explanation, setExplanation] = useState(book.explanation);
  const [editingField, setEditingField] = useState("");

  const handleEdit = (event) => {
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
      editBook(book.id, editedBook);
      handleClose();
    } else {
      swal("Please enter all information!");
    }
  };

  const handleInputChange = (e, field) => {
    if (editingField === field) {
      switch (field) {
        case "title":
          setTitle(e.target.value);
          break;
        case "author":
          setAuthor(e.target.value);
          break;
        case "category":
          setCategory(e.target.value);
          break;
        case "isbnNumber":
          setIsbnNumber(e.target.value);
          break;
        case "explanation":
          setExplanation(e.target.value);
          break;
        default:
          break;
      }
    }
  };

  const startEditing = (field) => {
    setEditingField(field);
  };

  const stopEditing = () => {
    setEditingField("");
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
      <Button className="edit-button" onClick={handleShow}>
        Edit Book
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <form
              onSubmit={handleEdit}
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
                  onChange={(e) => handleInputChange(e, "title")}
                  onFocus={() => startEditing("title")}
                  onBlur={stopEditing}
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
                  value={author}
                  onChange={(e) => handleInputChange(e, "author")}
                  onFocus={() => startEditing("author")}
                  onBlur={stopEditing}
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
                  value={category}
                  onChange={(e) => handleInputChange(e, "category")}
                  onFocus={() => startEditing("category")}
                  onBlur={stopEditing}
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
                  value={isbnNumber}
                  onChange={(e) => handleInputChange(e, "isbnNumber")}
                  onFocus={() => startEditing("isbnNumber")}
                  onBlur={stopEditing}
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
                  value={explanation}
                  onChange={(e) => handleInputChange(e, "explanation")}
                  onFocus={() => startEditing("explanation")}
                  onBlur={stopEditing}
                  rows="5"
                  className="form-control"
                  id="exampleFormControlInput3"
                />
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Update Book
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
