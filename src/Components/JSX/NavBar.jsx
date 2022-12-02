import "../CSS/styles.css";
import Leaf from "../img/Vector.png";
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
        <ul className="navbar-nav text-nowrap">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Book a Session
            </a>
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
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
