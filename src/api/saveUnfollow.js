import { delete2 } from "./common";

export function saveUnfollow(username, unfollowUsername) {
  const url = `${
    process.env.REACT_APP_API_URL
  }/users/${username}/following/${unfollowUsername}`;
  delete2(url);
}
