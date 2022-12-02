import "../CSS/styles.css";
import { Link } from "react-router-dom";
import Leaf from "../img/Vector.png";
import Tele from "../img/tele.png";
import Name from "../img/Group.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-white p-4" id="nav">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <span className="d-flex nav-brand">
            <img src={Leaf} alt="Learnhall Logo" className="logo" />
            <img src={Name} alt="Brand Name" className="brand" />
          </span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book-session">
              Book a Session
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Become a Tutor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tel:503-342-721">
              <img src={Tele} alt="telephone" className="tele" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
