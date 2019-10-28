import axios from "axios";
import { handleError } from "./common";

export async function authenticate(username, password) {
  const url = `${process.env.REACT_APP_API_URL}/authentication`;
  try {
    return axios.post(url, { username, password });
  } catch (error) {
    return handleError(error);
  }
}
