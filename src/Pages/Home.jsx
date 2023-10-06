import React from "react";
import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Slideshow from "../Components/Home";
import { LastAddedList } from "../Components/LastAdded";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <NavBar />
      <Slideshow />
      <div className="home-book">
        <div className="home-book-count">7</div>
        <div className="home-book-avaible">Books Avaible</div>
      </div>
      <LastAddedList/>
      <Footer />
    </>
  );
};

export { Home };
