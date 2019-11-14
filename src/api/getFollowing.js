import axios from "axios";
import { handleError, getHeaders } from "./common";

/**
 * Requests the API for all users except the given username.
 * Indicates for every whether the given username is following the user
 * and whether the user is following the given username.
 */
export async function getFollowing(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following`;

  const config = { headers: getHeaders() };

  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    return handleError(error);
  }
}
