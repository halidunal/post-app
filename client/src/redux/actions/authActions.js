import axios from "axios";
import { toast } from "react-hot-toast";

export const register = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data });
    window.location = "/";
  } catch (error) {
    toast.error(error.response?.data?.msg);
  }
};

export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/login", authData);
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/";
  } catch (error) {
    toast.error(error.response?.data?.msg);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:5000/logout");
    dispatch({ type: "LOGOUT" });
    window.location = "/";
  } catch (error) {
    toast.error(error.response?.data?.msg);
  }
};
