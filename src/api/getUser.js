import axios from "axios";
import { handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

/**
 * Requests the "whoami" resource along with the current JWT token.
 * If the token is valid, the API returns the user to which the token belongs.
 */
export async function getCurrentLoggedInUser() {
  const token = jwt.get();

  if (!token) return null;

  const config = { headers: getHeaders(token) };

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Requests the user by username without token.
 */
export async function getUser(username) {
  const config = {
    validateStatus: function(status) {
      return status < 400 || status === 404;
      // This means all status codes below 400 and 404 itself are valid
    }
  };

  const url = `${process.env.REACT_APP_API_URL}/users/${username}`;
  try {
    const result = await axios.get(url, config);
    if (result.status === 404) return null;
    else return result.data;
  } catch (error) {
    handleError(error);
  }
}
