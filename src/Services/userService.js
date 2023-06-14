import { api } from "./httpService";

const getUser = async (email) => {
  try {
    //TODO 
    const response = await api.get(`/users/${email}`);
    return response.data 
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};



const getUsers = async () => {
  try {
    const response = await api.get(`/users`);
    return response.data
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const userService = {
  getUser,
  getUsers,
};

export default userService;
