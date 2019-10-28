import axios from "axios";
import { handleError } from "./common";

export function savePost(username, postToAdd) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  return axios.post(url, postToAdd).catch(error => handleError(error));
}
