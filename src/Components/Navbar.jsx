import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import logo from "../images/book-exchange-logo.jpeg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedLink } from "./ProtectedLink";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar";

function NavBar() {
  const { isAuthenticated, user } = useAuth0();
  const { currentUser, getUserByEmail } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      getUserByEmail(user?.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      setUserName(user?.name || "");
      setUserPicture(user?.picture || "");
    } else {
      setUserName("");
      setUserPicture("");
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <div className="navbar-div">
        <a href="/">
          <img src={logo} alt={"logo"} className="nav-img" />
        </a>
        <SearchBar />
        {isAuthenticated ? (
          <div className="user-info">
            <Image
              src={userPicture}
              alt={userName}
              roundedCircle
              className="user-avatar"
            />
            <span className="user-name">Hello, {userName}</span>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
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
