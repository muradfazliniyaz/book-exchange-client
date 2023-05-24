import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [bookList, setBookList] = useState([]);

  const getBookList = async () => {
    try {
      const response = await fetch("http://localhost:9000/books");
      const data = await response.json();
      console.log(data);
      setBookList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  const addBook = async (pBook) => {
    const newBook = {
      title: pBook.title,
      author: pBook.author,
      category: pBook.category,
      isbnNumber: pBook.isbnNumber,
      explanation: pBook.explanation,
    };

    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    });

    await getBookList();
  };

  return (
    <BookContext.Provider value={{ addBook, bookList }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
