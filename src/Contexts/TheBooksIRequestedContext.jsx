import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useAuth0 } from "@auth0/auth0-react";

export const TheBooksIRequestedContext = createContext();

const TheBooksIRequestedContextProvider = (props) => {
  const { isAuthenticated } = useAuth0();
  const [theBooksIRequestedList, setTheBooksIRequestedList] = useState([]);
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
      const response = await fetch("http://localhost:9000/requestedBooks/" + id);
      const data = await response.json();
      console.log(data);
      setTheBooksIRequestedList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <TheBooksIRequestedContext.Provider value={{ theBooksIRequestedList }}>
      {props.children}
    </TheBooksIRequestedContext.Provider>
  );
};

export default TheBooksIRequestedContextProvider;
