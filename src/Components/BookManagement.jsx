import { useState, useEffect } from "react";
import bookService from "../Services/bookService";
import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";
import { AddBookPage } from "../Pages/AddBookPage";
import { Button } from "reactstrap";
import { EditBookPage } from "../Pages/EditBookPage";

function BookManagement() {
  const { bookList, deleteBook } = useContext(BookContext);
  const [books, setBooks] = useState([]);
  const roles = ["admin", "user"];
  const handleDelete = (id) => {
    deleteBook(id);
    console.log("The book was deleted. ID: ", id);
  };

  const getAllBooks = async () => {
    try {
      const books = await bookService.getBooks();
      if (books) {
        setBooks(books);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <div className="container bg-white">
        <h1 className="my-4">Book Management</h1>
        <AddBookPage />
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>ISBN Number</th>
              <th>Explanation</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.userId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.isbnNumber}</td>
                <td>{book.explanation}</td>
                <td>
                  <div className="book-management-button">
                    <EditBookPage book={book} />
                    <Button
                      className="delete-button"
                      onClick={() => handleDelete(book.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { BookManagement };
