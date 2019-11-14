import axios from "axios";
import { handleError } from "./common";

/**
 * Requests the API to authenticate the given username and password.
 * If successful, the response body contains the JWT token.
 */
export async function authenticate(username, password) {
  const url = `${process.env.REACT_APP_API_URL}/authentication`;
  try {
    const result = await axios.post(url, { username, password });
    return result.data;
  } catch (error) {
    return handleError(error);
  }
}
