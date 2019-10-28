import axios from "axios";
import { handleError, getHeaders } from "./common";

export async function getFollowing(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following`;

  const config = { headers: getHeaders() };

  try {
    return axios.get(url, config);
  } catch (error) {
    return handleError(error);
  }
}
