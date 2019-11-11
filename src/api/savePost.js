import axios from "axios";
import { handleError } from "./common";

export async function savePost(username, postToAdd) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  try {
    return await axios.post(url, postToAdd);
  } catch (error) {
    handleError(error);
  }
}
