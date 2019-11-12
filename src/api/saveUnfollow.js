import axios from "axios";
import { handleError, getHeaders } from "./common";

export async function saveUnfollow(username, unfollowUsername) {
  const config = { headers: getHeaders() };

  const url = `${
    process.env.REACT_APP_API_URL
  }/users/${username}/following/${unfollowUsername}`;

  try {
    return await axios.delete(url, config);
  } catch (error) {
    handleError(error);
  }
}
