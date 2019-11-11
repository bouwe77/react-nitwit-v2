import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import Header from "./UnauthenticatedHeader";
import Container from "./Container";
import LoginPage from "../LoginPage";
import ProfilePage from "../ProfilePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function UnauthenticatedApp() {
  const [error, setError] = useState(false);
  const { login } = useAuth();

  function handleLogin() {
    login("bouwe", "password").catch(() => setError(true));
  }

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/:username">
              <ProfilePage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default UnauthenticatedApp;
