import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const UserBookContext = createContext();

const UserBookContextProvider = (props) => {
  const [userBooksList, setUserBooksList] = useState([]);

  const { isAuthenticated, user } = useAuth0();

  const { currentUser, getUserByEmail } = useContext(UserContext);

  async function init () {
    await getUserByEmail(user?.email);
    await getBookListByUserId(currentUser.id);
  }
  useEffect(() => {
    if (isAuthenticated) {
      init()
    }
  }, [isAuthenticated]);

  const getBookListByUserId = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/books/user/${userId}`);
      const data = await response.json();
      console.log(data);
      setUserBooksList(data);
    } catch (error) {
      console.log(error);
    }
  };


  const addBook = async (pBook) => {
    const newBook = {
      title: pBook.title,
      author: pBook.author,
      category: pBook.category,
      isbnNumber: pBook.isbnNumber,
      userId: pBook.userId,
      explanation: pBook.explanation,
    };

    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    });

    await getBookListByUserId();
  };

  const deleteBook = async (pId) => {
    await fetch("http://localhost:9000/books/" + pId, {
      method: "DELETE",
    });
    await getBookListByUserId();
  };

  return (
    <UserBookContext.Provider
      value={{ addBook, userBooksList, deleteBook, getBookListByUserId }}
    >
      {props.children}
    </UserBookContext.Provider>
  );
};

export default UserBookContextProvider;
