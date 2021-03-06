import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Admin from "../../pages/Admin";
import Navbar from "../Navbar";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/admin" exact component={Admin} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
