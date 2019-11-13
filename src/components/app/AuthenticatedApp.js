import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./AuthenticatedHeader";
import Container from "./Container";
import TimelinePage from "../TimelinePage";
import FollowingPage from "../FollowingPage";
import ProfilePage from "../ProfilePage";

function AuthenticatedApp() {
  return (
    <>
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
    </>
  );
}

export default AuthenticatedApp;
