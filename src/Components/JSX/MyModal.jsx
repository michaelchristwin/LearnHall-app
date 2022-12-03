import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Email from "../img/email.png";
import "../CSS/styles.css";
import ModalSub from "../img/modalsub.png";
import Subrev from "../img/sub-rev.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="mod-head">
        <img src={Subrev} alt="svg" style={{ height: "100px" }} />
      </Modal.Header>
      <Modal.Body className="d-flex flex-column text-center p-5">
        <img src={Email} alt="Email icon" className="email mx-auto" />
        <h1>Thank You!</h1>
        <span>Your submission has been received. A</span>
        <span>Learnhall Represenative will be in contact with</span>
        <span>you soon to speak with you about your inquiry.</span>
      </Modal.Body>
      <div>
        <img
          src={ModalSub}
          alt="svg"
          style={{ height: "60px" }}
          className="float-end"
        />
      </div>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
