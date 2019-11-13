import { authenticate } from "../api/authenticate";
import * as jwt from "./jwt";

/**
 * Authenticates agains the API with the given credentials.
 * If successful, a JWT token is stored in the browser's local storage.
 */
async function login(username, password) {
  try {
    const result = await authenticate(username, password);
    console.log(result.data);

    jwt.save(result.data);
  } catch (error) {
    jwt.remove();
    throw error;
  }
}

/**
 * Logout means: just remove the JWT token.
 */
function logout() {
  jwt.remove();
}

function getToken() {
  return jwt.get();
}

export { login, logout, getToken };
