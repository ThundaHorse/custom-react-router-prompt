import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Prompt
} from "react-router-dom";

import "./styles.css";

function App() {
  console.log("Rendering App...");

  const [confirm, setConfirm] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(null);

  function getConfirmationWithExtraParameters(whateverYouWantToPass) {
    return function getUserConfirmation(message, callback) {
      // DO SOMEWHING WITH 'whateverYouWantToPass'
      setConfirmCallback(() => callback);
      setConfirm(true);
      // setup render (see https://gist.github.com/robertgonzales/e54699212da497740845712f3648d98c#file-getuserconfirmation-jsx)
      // render(
      //   <UserConfirmation {...whateverYouWantToPass} />
      // )
    };
  }

  // THIS IS HOW YOU WOULD USE getConfirmationWithExtraParameters
  // <Router getUserConfirmation={configureUserConfirmation(whateverYouWantToPass)}>
  //   {...}
  // </Router>

  function getConfirmation(message, callback) {
    console.log("Inside getConfirmation function...");
    setConfirmCallback(() => callback);
    setConfirm(true);
    // const allowTransition = window.confirm(message);
    // callback(allowTransition);
  }

  return (
    <Router getUserConfirmation={getConfirmation}>
      <AllRoutes />
      {confirm && (
        <Confirm confirmCallback={confirmCallback} setConfirm={setConfirm} />
      )}
    </Router>
  );
}

function Confirm(props) {
  console.log("Rendering Confirm...");
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
      <div>Are you sure?</div>
      <button onClick={allowTransition}>Yes</button>
      <button onClick={blockTransition}>No way</button>
    </React.Fragment>
  );
}

function AllRoutes(props) {
  console.log("Rendering AllRoutes...");
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comp1" component={Component1} />
    </Switch>
  );
}

function Home(props) {
  console.log("Rendering Home...");
  return (
    <React.Fragment>
      <div>This is Home</div>
      <ul>
        <li>
          <Link to="/comp1">Component1</Link>
        </li>
      </ul>
    </React.Fragment>
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
      <div>This is component 1</div>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
