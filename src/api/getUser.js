import axios from "axios";
import { handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export async function getCurrentLoggedInUser() {
  const token = jwt.get();
  if (!token) return Promise.resolve(null);

  const config = { headers: getHeaders(token) };

  if (!token) return Promise.resolve(null);

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  try {
    return axios.get(url, config);
  } catch (error) {
    return handleError(error);
  }
}
