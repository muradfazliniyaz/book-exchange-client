import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useAuth0 } from "@auth0/auth0-react";

export const RequestedBookContext = createContext();

const RequestedBookContextProvider = (props) => {
  const { isAuthenticated } = useAuth0();
  const [requestedBookList, setRequestedBookList] = useState([]);
  const { currentUser } = useContext(UserContext);
  async function init () {
    await getBookList(currentUser?.id);
  }
  useEffect(() => {
    if (isAuthenticated) {
      init();
    }
  }, [isAuthenticated, currentUser?.id]);

  const getBookList = async (id) => {
    try {
      const response = await fetch("http://localhost:9000/requestedBooksFromMe/" + id);
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
