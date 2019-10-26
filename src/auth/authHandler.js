import { authenticate } from "../api/authenticate";
import * as jwt from "./jwt";

function login(username, password) {
  // Authenticate with the given credentials.
  return authenticate(username, password)
    .then(result => {
      jwt.save(result.data);
    })
    .catch(error => {
      jwt.remove();
      throw error;
    });
}

function logout() {
  jwt.remove();
}

function isLoggedIn() {
  const token = jwt.get();
  return token ? true : false;
}

export { login, logout, isLoggedIn };
