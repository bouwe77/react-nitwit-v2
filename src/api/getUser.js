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

  if (!token) return null;

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}

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
    // Promise.resolve(null);
    else return result.data; // Promise.resolve(result.data);
  } catch (error) {
    handleError(error);
  }
}
