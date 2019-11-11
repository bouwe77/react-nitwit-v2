import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "../../auth/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="app">{isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
}

export default App;
