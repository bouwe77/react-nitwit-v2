import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "../../context/AuthProvider";

function App() {
  const { user } = useAuth();
  console.log("user:", user);

  return <div className="app">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
}

export default App;
