import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
import { Modal, Button } from "react-bootstrap";

const Modal = ({ show, onHide }) => {
  return ReactDOM.createPortal(
    <Modal>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Are you sure you want to logout?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="danger" href="/api/logout">
            logout
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>,
    document.querySelector("#modal")
  );
};

export default Modal;
