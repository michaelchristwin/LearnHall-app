import Modal from "react-bootstrap/Modal";
import Email from "../img/email.png";
import "../CSS/styles.css";
import ModalSub from "../img/modalsub.png";
import Subrev from "../img/sub-rev.png";
import Dottp from "../img/3dottp.png";
import Dotbtm from "../img/3dotbtm.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="mod-head">
        <img
          src={Subrev}
          alt="svg"
          style={{ height: "100px" }}
          className="pt-1"
        />
      </Modal.Header>
      <Modal.Body className="d-flex flex-column text-center p-5">
        <div className="mb-4">
          <img src={Dotbtm} alt="svg" style={{ marginBottom: "-70px" }} />
          <img src={Email} alt="Email icon" className="email mx-2" />
          <img src={Dottp} alt="svg" style={{ marginTop: "-100px" }} />
        </div>
        <h1>Thank You!</h1>
        <span>Your submission has been received. A</span>
        <span>
          {props.id === "Session"
            ? "Student Advisor will be in contact with you"
            : "Learnhall Represenative will be in contact with"}
        </span>
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
