import React from "react";
import Home from "../home/Home";
import { Switch, Route } from "react-router-dom";
import About from "../about/About";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}
