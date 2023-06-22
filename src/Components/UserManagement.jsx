import { useState, useEffect } from "react";
import userService from "../Services/userService";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { Button } from "reactstrap";
import { AddUserPage } from "../Pages/AddUserPage";
import { EditUserPage } from "../Pages/EditUserPage";

function UserManagement() {
  const { userList, deleteUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const roles = ["admin", "user"];
  const handleDelete = (id) => {
    deleteUser(id);
    console.log("The user was deleted. ID: ", id);
  };

  const getAllUsers = async () => {
    try {
      const users = await userService.getusers();
      if (users) {
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container bg-white">
        <h1 className="my-4">User Management</h1>
        <AddUserPage />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>E-Mail Address</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Marital Status</th>
              <th>Role</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.birthDate}</td>
                <td>{user.maritalStatus}</td>
                <td>{user.role}</td>
                <td>
                  <div className="book-management-button">
                    <EditUserPage />
                    <Button
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { UserManagement };
