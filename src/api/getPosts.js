import { getWithEtag, get } from "./common";

export async function getPostsWithEtag(username, etag) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  return await getWithEtag(url, etag);
}

export async function getPosts(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  return await get(url);
}
