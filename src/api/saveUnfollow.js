import axios from "axios";
import { handleError } from "./common";

export async function saveUnfollow(username, unfollowUsername) {
  const url = `${
    process.env.REACT_APP_API_URL
  }/users/${username}/following/${unfollowUsername}`;

  try {
    return await axios.delete(url);
  } catch (error) {
    handleError(error);
  }
}
