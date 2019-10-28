import axios from "axios";
import { getWithEtag, handleError } from "./common";

export async function getPostsWithEtag(username, etag) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  try {
    await getWithEtag(url, etag);
  } catch (error) {
    handleError(error);
  }
}

export async function getPosts(username) {
  const url = `${process.env.REACT_APP_API_URL}/users/${username}/posts`;
  try {
    await axios.get(url);
  } catch (error) {
    handleError(error);
  }
}
