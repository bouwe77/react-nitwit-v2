import axios from "axios";
import { handleError, getHeaders } from "./common";

/**
 * Requests the API that the given username wants to follow the user in the given follow object.
 */
export async function saveFollow(username, follow) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following`;

  const config = { headers: getHeaders() };

  try {
    return await axios.post(url, follow, config);
  } catch (error) {
    handleError(error);
  }
}
