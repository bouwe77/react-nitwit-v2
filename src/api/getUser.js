import axios from "axios";
import { handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export async function getCurrentLoggedInUser() {
  const token = jwt.get();

  console.log("token:", token);

  if (!token) return null;
  console.log("niet hier");

  const config = { headers: getHeaders(token) };

  if (!token) return null;

  const url = `${process.env.REACT_APP_API_URL}/users/whoami`;
  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}
