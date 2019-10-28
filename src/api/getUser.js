import axios from "axios";
import { handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export function getCurrentLoggedInUser() {
  const token = jwt.get();
  if (!token) return Promise.resolve(null);

  const config = { headers: getHeaders(token) };

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  return axios.get(url, config).catch(error => handleError(error));
}
