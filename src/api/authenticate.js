import { authenticationUrl, post } from "./common";

export function authenticate(username, password) {
  const url = authenticationUrl();
  return post(url, { username, password });
}
