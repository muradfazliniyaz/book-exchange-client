import React from "react";
import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Slideshow from "../Components/Home";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <NavBar />
      <Slideshow />
      <Footer />
    </>
  );
};

export { Home };
