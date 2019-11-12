import axios from "axios";
import { handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export async function getCurrentLoggedInUser() {
  const token = jwt.get();

  if (!token) return null;

  const config = { headers: getHeaders(token) };

  if (!token) return null;

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getUser(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}`;
  try {
    const result = await axios.get(url);
    console.log("getUser:", result.data);

    return result.data;
  } catch (error) {
    //if (error.response.status===401 || error.response.status===404)
    //  return null;

    console.log("getUserError");
    handleError(error);
  }
}
