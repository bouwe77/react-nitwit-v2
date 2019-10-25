import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";

function UnauthenticatedApp() {
  const [error, setError] = useState(false);
  const { login } = useAuth();

  function handleLogin() {
    login("bouwe", "password").catch(() => setError(true));
  }

  return (
    <>
      You are NOT authenticated
      <div>
        <button onClick={handleLogin}>Login</button>
        {error ? "error" : null}
      </div>
    </>
  );
}

export default UnauthenticatedApp;
