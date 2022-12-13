import Container from "react-bootstrap/Container";
import Tele from "../img/tele.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Leaf from "../img/leaf.png";
import Name from "../img/Group.png";
import "../CSS/styles.css";
import BaseUrl from "./BaseUrl";
import { Link } from "react-router-dom";

function NavbarEx(props) {
  return (
    <Navbar bg="white" expand="lg" className="fixed-top">
      <Container fluid>
        <Navbar.Brand href={BaseUrl} className="nav-b">
          <span className="d-flex nav-brand">
            <img src={Leaf} alt="Learnhall Logo" className="me-1 logo" />
            <img src={Name} alt="Brand Name" className="brand" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto nav my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to={BaseUrl}
              className={`nav-link ${props.state}`}
              id="nav-link"
            >
              Home
            </Link>
            <Link
              to={`${BaseUrl}/book-session`}
              className={`nav-link ${props.activeid}`}
              id="nav-link"
            >
              Book a Session
            </Link>
            <Link
              to={`${BaseUrl}/become-tutor`}
              className={`nav-link ${props.active}`}
            >
              Become a Tutor
            </Link>
            <Link to={`${BaseUrl}/faqs`} className="nav-link">
              Blog
            </Link>
            <a href="tel:503-342-721" className="nav-link">
              <img src={Tele} alt="telephone" className="tele" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEx;
