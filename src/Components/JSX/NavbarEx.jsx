import Container from "react-bootstrap/Container";
import Tele from "../img/tele.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Leaf from "../img/Vector.png";
import Name from "../img/Group.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";

function NavbarEx() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href={BaseUrl}>
          <span className="d-flex nav-brand">
            <img src={Leaf} alt="Learnhall Logo" className="logo" />
            <img src={Name} alt="Brand Name" className="brand" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ms-4" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="nav-item nav-link" to={BaseUrl}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to={`${BaseUrl}/book-session`}>
                Book a Session
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to={`${BaseUrl}/become-tutor`}>
                Become a tutor
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to={`${BaseUrl}/faqs`}>
                Blog
              </Link>
            </Nav.Link>
          </Nav>
          <Nav.Link href="tel:503-342-721">
            <img src={Tele} alt="telephone" className="tele" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEx;
