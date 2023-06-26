import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const getUserList = async () => {
    try {
      const response = await fetch("http://localhost:9000/users");
      const data = await response.json();
      console.log(data);
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getUserByEmail = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:9000/users/email/${email}`
      );
      const data = await response.json();
      console.log(data);
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (pUser) => {
    const newUser = {
      name: pUser.name,
      surname: pUser.surname,
      email: pUser.email,
      gender: pUser.gender,
      birthDate: pUser.birthDate,
      maritalStatus: pUser.maritalStatus,
      password: pUser.password,
      role: pUser.role,
    };

    await fetch("http://localhost:9000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });

    await getUserList();
  };

  const editUser = async (pId, pEditedUser) => {
    const editedUser = {
      name: pEditedUser.name,
      surname: pEditedUser.surname,
      email: pEditedUser.email,
      gender: pEditedUser.gender,
      birthDate: pEditedUser.birthDate,
      maritalStatus: pEditedUser.maritalStatus,
      password: pEditedUser.password,
      role: pEditedUser.role,
    };

    await fetch("http://localhost:9000/users/" + pId, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(editedUser),
    });
    await getUserList();
  };

  const deleteUser = async (pId) => {
    await fetch("http://localhost:9000/users/" + pId, {
      method: "DELETE",
    });
    await getUserList();
  };

  return (
    <UserContext.Provider
      value={{
        addUser,
        userList,
        currentUser,
        getUserByEmail,
        deleteUser,
        editUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
