import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export const RequestedBookContext = createContext();

const RequestedBookContextProvider = (props) => {
  const [requestedBookList, setRequestedBookList] = useState([]);
  const { currentUser } = useContext(UserContext);
  const getBookList = async () => {
    try {
      console.log(currentUser.id)
      const response = await fetch("http://localhost:9000/requestedBooks/" + currentUser.id);
      const data = await response.json();
      console.log(data);
      setRequestedBookList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

//   const addBook = async (pBook) => {
//     const newBook = {
//       title: pBook.title,
//       author: pBook.author,
//       category: pBook.category,
//       isbnNumber: pBook.isbnNumber,
//       explanation: pBook.explanation,
//     };

//     await fetch("http://localhost:9000/books", {
//       method: "POST",
//       body: JSON.stringify(newBook),
//       headers: { "Content-Type": "application/json" },
//     });

//     await getBookList();
//   };

//   const editBook = async (pId, pEditedBook) => {
//     const editedBook = {
//       title: pEditedBook.title,
//       author: pEditedBook.author,
//       category: pEditedBook.category,
//       isbnNumber: pEditedBook.isbnNumber,
//       explanation: pEditedBook.explanation,
//     };

//     await fetch("http://localhost:9000/books/" + pId, {
//       method: "PUT",
//       headers: { "Content-Type": "Application/json" },
//       body: JSON.stringify(editedBook),
//     });
//     await getBookList();
//   };

  // const handleEdit = async (id) => {
  //   await fetch("http://localhost:3000/books/" + id, {
  //     method: "PUT",
  //     headers: { "Content-Type": "Application/json" },
  //     body: JSON.stringify(id),
  //   });

  //   await editBook();
  //   console.log("Book updated: ", book);
  // };

  const deleteBook = async (pId) => {
    await fetch("http://localhost:9000/books/" + pId, {
      method: "DELETE",
    });
    await getBookList();
  };

  return (
    <RequestedBookContext.Provider value={{ requestedBookList, deleteBook }}>
      {props.children}
    </RequestedBookContext.Provider>
  );
};

export default RequestedBookContextProvider;
