import axios from "axios";
import { handleError, getHeaders } from "./common";

export function getFollowing(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following`;

  const config = { headers: getHeaders() };

  return axios.get(url, config).catch(error => handleError(error));
}
