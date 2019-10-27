import { get } from "./common";

export function getFollowing(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/following`;
  return get(url);
}
