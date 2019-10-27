import { get } from "./common";
import * as jwt from "../auth/jwt";

export function getCurrentLoggedInUser() {
  const token = jwt.get();

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  return token ? get(url, token) : null;
}
