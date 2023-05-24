import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);

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

  const addUser = async (pUser) => {
    const newUser = {
      name: pUser.name,
      surname: pUser.surname,
      email: pUser.email,
      gender: pUser.gender,
      birthDate: pUser.birthDate,
      maritalStatus: pUser.maritalStatus,
      password: pUser.password,
    };

    await fetch("http://localhost:9000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });

    await getUserList();
  };

  return (
    <UserContext.Provider value={{ addUser, userList }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
