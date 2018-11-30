import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import NotFoundPage from "./views/notFound";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="*" component={NotFoundPage} />
  </Switch>
);
