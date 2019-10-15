import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import TimelinePage from "../timeline";
import FollowingPage from "../following";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/following">
              <FollowingPage />
            </Route>
            <Route path="/">
              <TimelinePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
