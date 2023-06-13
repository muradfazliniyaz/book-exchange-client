import { useState, useEffect } from "react";
import userService from "../Services/userService";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { Button } from "reactstrap";

function UserManagement() {
  const { userList, deleteUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const roles = ["admin", "user"];
  const handleDelete = (id) => {
    deleteUser(id);
    console.log("The user was deleted. ID: ", id);
  };

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, role: newRole };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="container bg-white">
      <h1 className="my-4">User Management</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>E-Mail Addres</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Marital Status</th>
            <th>Role</th>
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
              <td>
                <select
                  className="form-select"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <Button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { UserManagement };
