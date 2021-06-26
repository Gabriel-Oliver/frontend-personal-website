import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
