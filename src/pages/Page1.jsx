import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page1 extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", this.handlePageExit);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handlePageExit);
  }

  handlePageExit(e) {
    e.preventDefault();
    e.returnValue = "";
  }

  render() {
    return (
      <div className="container">
        <h1>Page 1</h1>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Page1;
