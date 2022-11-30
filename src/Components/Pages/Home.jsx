import Leaf from "../img/Vector.png";
//import Ellipse from "../img/Ellipse.png";
import Name from "../img/Group.png";
import "../CSS/styles.css";

function Home() {
  return (
    <main>
      <section className="top d-flex">
        <span className="d-flex nav-brand">
          <img src={Leaf} alt="Learnhall Logo" className="logo" />
          <img src={Name} alt="Brand Name" className="brand" />
        </span>
        <nav className="navbar navbar-expand-lg bg-white" id="nav">
          <div className="container-fluid">
            <ul className="navbar-nav">
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
      </section>
    </main>
  );
}

export default Home;
