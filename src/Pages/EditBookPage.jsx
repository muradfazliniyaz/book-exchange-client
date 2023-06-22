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

  const handleEdit = (event) => {
    console.log(book.id);
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
                  onChange={(isbnNumber) => setIsbnNumber(isbnNumber.target.value)}
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
                  // onClick={handleEdit}
                >
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

// import React, { useState } from 'react';

// const EditForm = ({ book, title, author, category, isbnNumber, explanation, onSave }) => {
//   const { editBook } = useContext(BookContext);
//   const [editedTitle, setEditedTitle] = useState(title);
//   const [editedAuthor, setEditedAuthor] = useState(author);
//   const [editedCategory, setEditedCategory] = useState(category);
//   const [editedisbnNumber, setEditedIsbnNumber] = useState(isbnNumber);
//   const [editedexplanation, setEditedExplanation] = useState(explanation);


//   const handleSave = () => {
//     onSave(editedTitle, editedAuthor, editedCategory, editedisbnNumber, editedexplanation);
//   };

//   return (
//     <div>
//       <label>
//         Title:
//         <input
//           type="text"
//           value={editedTitle}
//           onChange={(e) => setEditedTitle(e.target.value)}
//         />
//       </label>
//       <label>
//         Author:
//         <input
//           type="text"
//           value={editedAuthor}
//           onChange={(e) => setEditedAuthor(e.target.value)}
//         />
//       </label>
//       <label>
//         Category:
//         <input
//           type="text"
//           value={editedCategory}
//           onChange={(e) => setEditedCategory(e.target.value)}
//         />
//       </label>
//       <label>
//         ISBN Number:
//         <input
//           type="text"
//           value={editedisbnNumber}
//           onChange={(e) => setEditedIsbnNumber(e.target.value)}
//         />
//       </label>
//       <label>
//         Explanation:
//         <input
//           type="text"
//           value={editedexplanation}
//           onChange={(e) => setEditedExplanation(e.target.value)}
//         />
//       </label>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// const EditBookPage = () => {
//   const [title, setTitle] = useState(title);
//   const [author, setAuthor] = useState(author);
//   const [category, setCategory] = useState(category);
//   const [isbnNumber, setIsbnNumber] = useState(isbnNumber);
//   const [explanation, setExplanation] = useState(explanation);

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = (editedTitle, editedAuthor, editedCategory, editedisbnNumber, editedexplanation) => {
//     setTitle(editedTitle);
//     setAuthor(editedAuthor);
//     setCategory(editedCategory);
//     setIsbnNumber(editedisbnNumber);
//     setExplanation(editedexplanation);
//     setIsEditing(false);
    
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <EditForm
//           title={title}
//           author={author}
//           category={category}
//           isbnNumber={isbnNumber}
//           explanation={explanation}
//           onSave={handleSave}
//         />
//       ) : (
//         <div>
//           <h1>{title}</h1>
//           <p>Author: {author}</p>
//           <p>Category: {category}</p>
//           <p>isbnNumber: {isbnNumber}</p>
//           <p>Explanation: {explanation}</p>
//           <button onClick={handleEdit}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export { EditBookPage };
