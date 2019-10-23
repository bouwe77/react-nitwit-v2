import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Container from "./Container";
import TimelinePage from "../TimelinePage";
import FollowingPage from "../FollowingPage";
import ProfilePage from "../ProfilePage";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
