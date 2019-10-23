import { postsUrl, getWithEtag, get } from "./common";

export async function getPostsWithEtag(username, etag) {
  const url = postsUrl(username);
  return await getWithEtag(url, etag);
}

export async function getPosts(username) {
  const url = postsUrl(username);
  return await get(url);
}
