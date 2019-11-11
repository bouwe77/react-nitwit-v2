import axios from "axios";
import { getWithEtag, handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export async function getTimelineWithEtag(username, etag) {
  const token = jwt.get();

  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;

  try {
    return await getWithEtag(url, etag, token);
  } catch (error) {
    handleError(error);
  }
}

export async function getTimeline(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;

  const config = { headers: getHeaders() };

  try {
    return await axios.get(url, config);
  } catch (error) {
    handleError(error);
  }
}
