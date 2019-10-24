import React, { createContext, useContext } from "react";
import * as auth from "../auth";

/**
 * The AuthContext handles context regarding authentication related functionality.
 */
const AuthContext = createContext();

/**
 * The AuthProvider is the provider for the AuthContext.
 * It provides means of holding data of the logged in user and functions for logging in or out.
 */
function AuthProvider(props) {
  const user = auth.getUser();

  const login = (username, password) => {
    auth.login(username, password).then(result => {
      //console.log("result", result);
    });
  };

  const logout = () => {
    return auth.logout();
    //TODO Clear user data
  };

  const isLoggedIn = () => {
    return auth.isLoggedIn();
  };

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
