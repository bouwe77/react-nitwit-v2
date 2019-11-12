import axios from "axios";
import { handleError, getHeaders } from "./common";

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
