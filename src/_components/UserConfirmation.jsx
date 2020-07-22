import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UserConfirmation = (message, callback) => {
  const container = document.createElement("div");
  container.setAttribute("custom-confirmation-navigation", "");
  document.body.appendChild(container);

  const closeModal = (callbackState) => {
    ReactDOM.unmountComponentAtNode(container);
    callback(callbackState);
  };

  const [setModalShow] = React.useState(false);

  ReactDOM.render(
    <Modal show={true} onHide={setModalShow(false)}>
      <Modal.Title>Modal heading</Modal.Title>
      <Modal.Body>
        {message}
        <Modal.Footer>
          <Button onClick={() => closeModal(false)}>Cancel</Button>
          <Button onClick={() => closeModal(true)}>Confirm</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>,
    container
  );
};

export default UserConfirmation;
