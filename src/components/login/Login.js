import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styles from "./Login.module.css";
import { useAuth } from "../../auth/AuthProvider";

export default () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuth();

  const handleSubmit = event => {
    event.preventDefault();

    const errorMessage = validateUsername();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError(null);
    login(username, password)
      .next(() => setIsLoggedIn(true))
      .catch(() => setError("Invalid credentials"));
  };

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const validateUsername = () =>
    !username || username.length === 0 ? "Invalid username" : null;

  if (isLoggedIn) return <Redirect to="/" />;
  else
    return (
      <div className={styles["form-container"]}>
        <div className={styles.error}>{error}</div>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={username} placeholder="username" onChange={handleUsernameChange} />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
};
