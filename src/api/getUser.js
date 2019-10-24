import { userUrl, get } from "./common";

export function getUser(username) {
  const url = userUrl(username);
  return get(url);
}
