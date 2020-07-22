import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch, Prompt } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Confirm from "./_components/Confirm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: false,
      confirmCallback: null,
      showModal: true
    };
  }

  setConfirm = (val) => {
    this.setState({
      confirm: val
    });
  };

  setConfirmCallback = (val) => {
    this.setState({
      confirmCallback: val
    });
  };

  setShow = () => {
    this.setState({
      showModal: true
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false
    });
  };

  getConfirmation = (message, callback) => {
    this.setState({
      confirmCallback: callback,
      confirm: true
    });
  };

  AllRoutes = (props) => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/1" component={this.Component1} />
        <Route path="/2" component={this.Component2} />
      </Switch>
    );
  };

  Component1 = (props) => {
    const [isBlocking, setIsBlocking] = useState(true);

    return (
      <React.Fragment>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <Page1 />
      </React.Fragment>
    );
  };

  Component2 = (props) => {
    const [isBlocking, setIsBlocking] = useState(true);

    return (
      <React.Fragment>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <Page2 />
      </React.Fragment>
    );
  };

  render() {
    return (
      <BrowserRouter getUserConfirmation={this.getConfirmation}>
        <this.AllRoutes />
        {this.state.confirm && (
          <Confirm
            confirmCallback={this.state.confirmCallback}
            setConfirm={this.setConfirm}
            handleClose={this.handleClose}
            show={this.state.showModal}
          />
        )}
      </BrowserRouter>
    );
  }
}

export default App;
