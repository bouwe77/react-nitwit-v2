import { post } from "./common";

export function saveFollow(username, follow) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following/${follow}`;
  post(url, follow);
}
