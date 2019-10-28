import axios from "axios";
import { handleError } from "./common";

export async function saveFollow(username, follow) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following/${follow}`;
  try {
    return axios.post(url, follow);
  } catch (error) {
    return handleError(error);
  }
}
