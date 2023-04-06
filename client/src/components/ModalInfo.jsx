import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalInfo = ({ show, handleClose, information }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Realizando solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>{information} </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
