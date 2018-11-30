import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default function withNavigation(WrappedComponent) {
  class Navigation extends Component {
    render() {
      return (
        <Fragment>
          <div>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/contact">Contact</Link>
          </div>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
  return Navigation;
}
