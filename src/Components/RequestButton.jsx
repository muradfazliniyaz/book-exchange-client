import React from "react";
import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const RequestButton = ({bookId}) => {
  const { assignBook } = useContext(BookContext);
  const { currentUser } = useContext(UserContext);


  const requestBook = () => {
    console.log(bookId)
    assignBook (bookId, currentUser.id)
  }

  return (
    <button
      className="nav-button"
      onClick={
        requestBook
      }
    >
      Request
    </button>
  );
};

export default RequestButton;
