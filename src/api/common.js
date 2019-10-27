import axios from "axios";

/**
 * Issues an HTTP GET with an ETag header to the given URL.
 * The result only contains data when the ETag differs between client and server.
 */
export async function getWithEtag(url, etag, token = null) {
  const headers = { "If-None-Match": etag };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await axios.get(url, {
      // Add a header to let the server know what's the version on the client.
      headers,
      validateStatus: function(status) {
        return status < 400; // This means all status codes below 400 are valid
      }
    });
    // Return a boolean indicating the data has changed.
    // And if so, also return the data itself and the new etag.
    return etag !== res.headers.etag && res.status === 200
      ? { isNew: true, etag: res.headers.etag, data: res.data }
      : { isNew: false };
  } catch (error) {
    handleError(error);
  }
}

/**
 * Issues an HTTP GET request to the URL.
 * @param {string} url
 */
export function get(url, token = null) {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios
    .get(url, { headers })
    .then(({ data }) => data)
    .catch(error => {
      handleError(error);
    });
}

/**
 * Issues an HTTP POST request with the data to the URL.
 * @param {string} url
 * @param {object} data
 */
export function post(url, data) {
  return axios.post(url, data).catch(error => {
    handleError(error);
  });
}

/**
 * Issues an HTTP DELETE request to the URL.
 * Note: delete is a reserved keyword, hence the name delete2...
 * @param {string} url
 */
export function delete2(url) {
  return axios.delete(url).catch(error => {
    handleError(error);
  });
}

function handleError(error) {
  //  console.log(error.response.status, error, error.request, error.response, error.config);
  console.log(error.response.status, error.config.url, error.config.method);
  throw error;
}
