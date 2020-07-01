import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyModal() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Large Modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem
          Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum...
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyModal;
