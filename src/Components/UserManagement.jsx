import { useState, useEffect } from "react";
import userService from "../Services/userService";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

function UserManagement() {
  const { userList } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const roles = ["admin", "user"];

  const getAllUsers = async () => {
    try {
      const users = await userService.getUsers();
      if (users) {
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    getAllUsers();
  }, []);
  const handleSave = async () => {
    await userService.updateUserRoles(users);
    window.location.reload();
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
          {users.map((user) => (
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
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleSave}>
        Save{" "}
      </button>
    </div>
  );
}

export { UserManagement };
