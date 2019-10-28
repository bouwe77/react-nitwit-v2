import React, { createContext, useState } from "react";
import * as auth from "./authHandler";
import { getCurrentLoggedInUser } from "../api/getUser";

/**
 * The AuthContext handles context regarding authentication related functionality.
 */
const AuthContext = createContext();

/**
 * The AuthProvider is the provider for the AuthContext.
 * It provides means of holding data of the logged in user and functions for logging in or out.
 */
function AuthProvider(props) {
  const [user, setUser] = useState(() => getUser());

  async function getUser() {
    try {
      const user = await getCurrentLoggedInUser();
      return user;
    } catch (e) {
      return null;
    }
  }

  function login(username, password) {
    auth.login(username, password).then(() => {
      setUser(getUser());
    });
  }

  function logout() {
    setUser(null);
    auth.logout();
  }
  console.log(user);

  const isLoggedIn = user ? true : false;

  return <AuthContext.Provider value={{ user, login, logout, isLoggedIn }} {...props} />;
}

/**
 * The useAuth hook exposes the AuthContext.
 */
function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
