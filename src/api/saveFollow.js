import axios from "axios";
import { handleError } from "./common";

export function saveFollow(username, follow) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following/${follow}`;
  return axios.post(url, follow).catch(error => handleError(error));
}
