import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "../../auth/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="app">
      {isLoggedIn ? isLoggedIn === true ? <AuthenticatedApp /> : <UnauthenticatedApp /> : null}
    </div>
  );
}

export default App;
