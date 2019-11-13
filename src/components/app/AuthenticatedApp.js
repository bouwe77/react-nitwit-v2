import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./AuthenticatedHeader";
import Container from "./Container";
import TimelinePage from "../TimelinePage";
import FollowingPage from "../FollowingPage";
import ProfilePage from "../ProfilePage";

import { useAuth } from "../../auth/AuthProvider";

function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <>
      welkom
      <br />
      <button onClick={logout}>logout</button>
      <TimelinePage />
    </>
  );
}

/*
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <TimelinePage />
          </Route>
          <Route path="/following">
            <FollowingPage />
          </Route>
          <Route path="/:username">
            <ProfilePage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
*/

export default AuthenticatedApp;
