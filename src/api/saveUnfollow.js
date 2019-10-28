import axios from "axios";
import { handleError } from "./common";

export function saveUnfollow(username, unfollowUsername) {
  const url = `${
    process.env.REACT_APP_API_URL
  }/users/${username}/following/${unfollowUsername}`;
  return axios.delete(url).catch(error => handleError(error));
}
