import axios from "axios";

const API_URL = "http://localhost:9000/api/user/";

// Register user
export const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "register", userData);
    console.log("register-response", response);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Login user
export const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    console.log("login-response", response);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Logout user
export const logout = () => localStorage.removeItem("user");
