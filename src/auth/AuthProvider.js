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
  const [user, setUser] = useState(() => getUser("useState"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("token:", auth.getToken());

  async function getUser(x) {
    try {
      const user = await getCurrentLoggedInUser();
      return user;
    } catch (e) {
      return null;
    }
  }

  async function login(username, password) {
    try {
      await auth.login(username, password);
      const user = getUser("login");
      setUser(user);
      setIsLoggedIn(user != null);
    } catch (error) {
      setIsLoggedIn(false);
      console.log("error:", error);
      throw error;
    }
  }

  function logout() {
    setUser(null);
    setIsLoggedIn(false);
    auth.logout();
  }

  //console.log("isLoggedIn:", isLoggedIn);

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
