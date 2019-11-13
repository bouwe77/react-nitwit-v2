import React, { createContext, useState, useEffect } from "react";
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
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let didCancel = false;

    // You can not have an async useEffect.
    // To work around this, I created an async wrapper function inside the useEffect
    // and call that as if it were a non-async function.
    async function asyncWrapperForUseEffect() {
      await initUserState();
    }
    if (!didCancel) asyncWrapperForUseEffect();

    return () => {
      didCancel = true;
    };
  }, []);

  async function initUserState(x) {
    try {
      const user = await getCurrentLoggedInUser();
      setUser(user);
      setIsLoggedIn(user != null);
    } catch (e) {
      setUser(null);
      setIsLoggedIn(false);
    }
  }

  async function login(username, password) {
    try {
      await auth.login(username, password);
      initUserState("login");
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }

  function logout() {
    setUser(null);
    setIsLoggedIn(false);
    auth.logout();
  }

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
