import axios from "axios";
import { handleError, getHeaders } from "./common";

/**
 * Requests the API to save the given post for the given username.
 */
export async function savePost(username, postToAdd) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;

  const config = { headers: getHeaders() };

  try {
    return await axios.post(url, postToAdd, config);
  } catch (error) {
    handleError(error);
  }
}
