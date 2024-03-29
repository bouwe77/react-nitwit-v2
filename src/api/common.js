import axios from "axios";
import * as jwt from "../auth/jwt";

/**
 * Issues an HTTP GET with an ETag header to the given URL.
 * The result only contains data when the ETag differs between client and server.
 */
export async function getWithEtag(url, etag, token = null) {
  try {
    const config = {
      headers: getHeaders(token, etag),
      validateStatus: function(status) {
        return status < 400; // This means all status codes below 400 are valid
      }
    };

    const res = await axios.get(url, config);

    // Return a boolean indicating whether the data has changed.
    // And if so, also return the data itself and the new etag.
    return etag !== res.headers.etag && res.status === 200
      ? { isNew: true, etag: res.headers.etag, data: res.data }
      : { isNew: false, etag: res.headers.etag };
  } catch (error) {
    handleError(error);
  }
}

/**
 * Returns HTTP headers consisting of the current etag token stored on
 * local browser storage and the the etag, if provided.
 */
export function getHeaders(token, etag = null) {
  if (!token) token = jwt.get();

  const headers = {};

  if (token) headers["Authorization"] = `Bearer ${token}`;

  if (etag) headers["If-None-Match"] = etag;

  return headers;
}

/**
 * Handles the error by logging to the console and rethrowing it again.
 */
export function handleError(error) {
  console.log(
    error.response.status,
    error.response.data.Message,
    error.config.url,
    error.config.method
  );
  throw error;
}
