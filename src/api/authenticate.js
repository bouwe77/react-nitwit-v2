import { post } from "./common";

export function authenticate(username, password) {
  const url = `${process.env.REACT_APP_API_URL}/authentication`;
  return post(url, { username, password });
}
