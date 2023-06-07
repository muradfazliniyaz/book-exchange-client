import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserManagement } from "../Components/UserManagement";

const UserManagementPage = () => {
  return (
    <>
      <NavBar />
      <UserManagement />
      <Footer />
    </>
  );
};

export { UserManagementPage };
