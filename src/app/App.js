import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Container from "./Container";
import TimelinePage from "../timeline";
import FollowingPage from "../following";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/following">
              <FollowingPage />
            </Route>
            <Route path="/">
              <TimelinePage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
