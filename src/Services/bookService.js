import { api } from "./httpService";

const getBook = async (email) => {
  try {
    //TODO 
    const response = await api.get(`/users/profile/${email}`);
    return response.data  //user object
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const saveBook = async (book) => {
  try {
    //TODO 
    const response = await api.post(`/books`, book);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getBooks = async () => {
  try {
    const response = await api.get(`/books`);
    return response.data
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};


const bookService = {
  getBook,
  saveBook,
  getBooks,
};

export default bookService;
