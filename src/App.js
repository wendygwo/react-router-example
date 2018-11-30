import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./views/about";
import Contact from "./views/contact";
import NotFoundPage from "./views/notFound";

class App extends Component {
  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default App;
