import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ComponentUserPage } from "../Components/ComponentUserPage";

const UserPage = () => {
  return (
    <>
      <NavBar />
      <ComponentUserPage />
      <Footer />
    </>
  );
};

export { UserPage };
