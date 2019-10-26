import { timelineUrl, getWithEtag, get } from "./common";
import * as jwt from "../auth/jwt";

export async function getTimelineWithEtag(username, etag) {
  const token = jwt.get();
  const url = timelineUrl(username);
  return token ? await getWithEtag(url, etag, token) : null;
}

export async function getTimeline(username) {
  const url = timelineUrl(username);
  return await get(url);
}
