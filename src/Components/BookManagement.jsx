import { useState, useEffect } from "react";
import bookService from "../Services/bookService";
// import { BookContext } from "../Contexts/BookContext";
// import { useContext } from "react";

function BookManagement() {
//   const { bookList } = useContext(BookContext);
  const [books, setBooks] = useState([]);
//   const roles = ["admin", "user"];

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
  const handleSave = async () => {
    await bookService.updateBookRoles(books);
    window.location.reload();
  };
  return (
    <div className="container bg-white">
      <h1 className="my-4">Book Management</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN Number</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.isbnNummer}</td>
              <td>{book.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleSave}>
        Save{" "}
      </button>
    </div>
  );
}

export { BookManagement };
