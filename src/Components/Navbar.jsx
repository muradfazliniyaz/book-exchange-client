import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/book-exchange-logo.jpeg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedLink } from "./ProtectedLink";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { isAuthenticated, user } = useAuth0();

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  const { currentUser, getUserByEmail } = useContext(UserContext);

  useEffect(() => {
    if (isAuthenticated) {
      getUserByEmail(user?.email);
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="navbar-div">
        <a href="/">
          <img src={logo} alt={"logo"} className="nav-img" />
        </a>
        <div>
          <label htmlFor="input-search"></label>
          <input
            type="search"
            name="search"
            id="search"
            className="search-field"
            placeholder="Title, Author, Keyword, ISBN, User"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      <Navbar className="navbar-container">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <>
                <Nav.Link className="nav-button" as={NavLink} to="/" exact>
                  HOME
                </Nav.Link>
                <Nav.Link className="nav-button" as={NavLink} to="/About">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="nav-button" as={NavLink} to="/Books">
                  BOOKS
                </Nav.Link>
                <Nav.Link className="nav-button" as={NavLink} to="/Contact">
                  CONTACT
                </Nav.Link>
              </>
              {isAuthenticated && (
                <>
                  <ProtectedLink
                    name="USER PAGE"
                    link="/userpage"
                    user={currentUser}
                    roles={["user", "admin"]}
                  />
                  <ProtectedLink
                    name="USER MANAGEMENT"
                    link="/usermanagementpage"
                    user={currentUser}
                    roles={["admin"]}
                  />
                  <ProtectedLink
                    name="BOOK MANAGEMENT"
                    link="/bookmanagementpage"
                    user={currentUser}
                    roles={["admin"]}
                  />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { NavBar };
