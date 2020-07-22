import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Confirm(props) {
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
      <Modal show={props.show} onHide={props.handleClose}>
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

export default Confirm;
