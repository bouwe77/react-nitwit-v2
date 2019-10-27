import { getWithEtag, get } from "./common";
import * as jwt from "../auth/jwt";

export async function getTimelineWithEtag(username, etag) {
  const token = jwt.get();
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;
  return token ? await getWithEtag(url, etag, token) : null;
}

export async function getTimeline(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/timeline`;
  return await get(url);
}
