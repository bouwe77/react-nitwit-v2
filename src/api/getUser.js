import { currentUserUrl, get } from "./common";
import * as jwt from "../auth/jwt";

export function getCurrentLoggedInUser() {
  const token = jwt.get();

  const url = currentUserUrl();
  return token ? get(url, token) : null;
}
