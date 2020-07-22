import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Prompt } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  console.log("Rendering App");

  const [confirm, setConfirm] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(null);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  function getConfirmation(message, callback) {
    console.log("Inside getConfirmation");
    setConfirmCallback(() => callback);
    setConfirm(true);
  }

  return (
    <BrowserRouter getUserConfirmation={getConfirmation}>
      <AllRoutes />
      {confirm && (
        <Confirm confirmCallback={confirmCallback} setConfirm={setConfirm} />
      )}
    </BrowserRouter>
  );

  function Confirm(props) {
    console.log("Rendering Confirm");

    function allowTransition() {
      props.setConfirm(false);
      props.confirmCallback(true);
    }

    function blockTransition() {
      props.setConfirm(false);
      props.confirmCallback(false);
    }

    return (
      <React.Fragment>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <p>Are you sure?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={allowTransition}>Yes</Button>
            <Button onClick={blockTransition}>No</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }

  function AllRoutes(props) {
    console.log("Rendering AllRoutes...");
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/1" component={Component1} />
        <Route path="/2" component={Component2} />
      </Switch>
    );
  }

  function Component1(props) {
    console.log("Rendering Component1...");
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
  }

  function Component2(props) {
    console.log("Rendering Component1...");
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
  }
}

export default App;
