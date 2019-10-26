import { authenticate } from "../api/authenticate";
import * as jwt from "./jwt";

/**
 * Authenticates agains the API with the given credentials.
 * If successful, a JWT token is stored in the browser's local storage.
 */
function login(username, password) {
  return authenticate(username, password)
    .then(result => {
      jwt.save(result.data);
    })
    .catch(error => {
      jwt.remove();
      throw error;
    });
}

/**
 * Logout means: just remove the JWT token.
 */
function logout() {
  jwt.remove();
}

export { login, logout };
