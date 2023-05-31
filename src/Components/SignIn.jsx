import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { SignInForm } from "./SignInForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "reactstrap";

const SignIn = () => {
  return (
    <>
      <NavBar />
      <Row xs="8">
        <div className="home-div text">
          <SignInForm />
        </div>
      </Row>
      <Footer />
    </>
  );
};

export { SignIn };
