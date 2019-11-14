import axios from "axios";
import { getWithEtag, handleError } from "./common";

/**
 * Requests the API to get the given username's posts with the given etag version number.
 */
export async function getPostsWithEtag(username, etag) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  try {
    return await getWithEtag(url, etag);
  } catch (error) {
    handleError(error);
  }
}

/**
 * Requests the API to get the given username's posts.
 */
export async function getPosts(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    handleError(error);
  }
}
