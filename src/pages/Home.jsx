import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      setShow: false
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <br />
        <Link to="/1">Page 1</Link>
        <br />
        <Link to="/2">Page 2</Link>
        <br />

        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
          <Modal.Body>
            Blah
            <Modal.Footer>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button onClick={this.handleClose}>Confirm</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Home;
