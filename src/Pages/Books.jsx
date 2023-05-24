import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { BookList } from "../Components/BookList";
import React from "react";

const Books = () => {
  return (
    <>
      <NavBar />
      <BookList />
      <Footer />
    </>
  );
};

export { Books };
