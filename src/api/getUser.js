import { userUrl, currentUserUrl, get } from "./common";

export function getUser(username, token) {
  const url = userUrl(username);
  return get(url, token);
}

export function getCurrentUser(token) {
  const url = currentUserUrl();
  return get(url, token);
}
