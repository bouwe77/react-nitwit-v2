import { authenticate } from "../api/authenticate";
import { getCurrentUser } from "../api/getUser";

const localStorageKey = "nitwit_auth_token";

function getUser() {
  const token = getToken();
  if (!token) return null;

  return getCurrentUser(token)
    .then(user => {
      console.log("getCurrentUser", user);
      return user;
    })
    .catch(error => {
      removeToken();
      throw error;
    });
}

function login(username, password) {
  // Authenticate with the given credentials.
  return authenticate(username, password)
    .then(result => {
      saveToken(result.data);
    })
    .catch(error => {
      removeToken();
      throw error;
    });
}

function logout() {
  removeToken();
  return Promise.resolve();
}

function isLoggedIn() {
  const token = getToken();
  return token ? true : false;
}

function saveToken(token) {
  return window.localStorage.setItem(localStorageKey, token);
}

function removeToken() {
  return window.localStorage.removeItem(localStorageKey);
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, logout, isLoggedIn, getUser };
