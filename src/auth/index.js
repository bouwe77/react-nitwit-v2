import { authenticate } from "../api/authenticate";
import { getCurrentUser } from "../api/getUser";

const localStorageKey = "nitwit_auth_token";

function getUser() {
  const token = getToken();
  if (!token) return null;

  getCurrentUser(token)
    .then(user => {
      console.log("gettUser:", user);
      return user;
    })
    .catch(error => {
      console.log("getUser:", error.response.status);
      throw error;
    });
}

function login(username, password) {
  // Authenticate with the given credentials.
  return authenticate(username, password).then(result => {
    console.log("authenticate:", result.data);
    saveToken(result.data);
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
