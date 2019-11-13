import axios from "axios";
import { getWithEtag, handleError, getHeaders } from "./common";
import * as jwt from "../auth/jwt";

export async function getTimelineWithEtag(username, etag) {
  const token = jwt.get();

  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;

  try {
    const data = await getWithEtag(url, etag, token);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function getTimeline(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;

  const config = { headers: getHeaders() };

  try {
    const result = await axios.get(url, config);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}
