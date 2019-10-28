import axios from "axios";
import { handleError } from "./common";

export function authenticate(username, password) {
  const url = `${process.env.REACT_APP_API_URL}/authentication`;
  return axios.post(url, { username, password }).catch(error => handleError(error));
}
