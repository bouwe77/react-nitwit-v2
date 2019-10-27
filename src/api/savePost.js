import { post } from "./common";

export function savePost(username, postToAdd) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  return post(url, postToAdd);
}
