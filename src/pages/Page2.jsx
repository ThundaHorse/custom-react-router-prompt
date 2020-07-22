import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page2 extends Component {
  render() {
    return (
      <div className="container">
        <h1>Page 2</h1>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Page2;
