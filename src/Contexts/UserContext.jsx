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

  return (
    <UserContext.Provider
      value={{ addUser, userList, currentUser, getUserByEmail }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
