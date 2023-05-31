import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookManagement } from "../Components/BookManagement";

const BookManagementPage = () => {
  return (
    <>
      <NavBar />
      <BookManagement />
      <Footer />
    </>
  );
};

export { BookManagementPage };
