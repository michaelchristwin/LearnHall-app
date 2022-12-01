import Leaf from "../img/Vector.png";
import SemiCircle from "../img/topEllipse.png";
import Name from "../img/Group.png";
import Student from "../img/student.png";
import Rect from "../img/rectangle.png";
import "../CSS/styles.css";

function Home() {
  return (
    <main>
      <section className="top d-flex">
        <img src={SemiCircle} alt="" className="draw1" />

        <nav className="navbar navbar-expand-lg bg-white p-4" id="nav">
          <div className="container-fluid ">
            <a class="navbar-brand" href="#">
              <span className="d-flex nav-brand">
                <img src={Leaf} alt="Learnhall Logo" className="logo" />
                <img src={Name} alt="Brand Name" className="brand" />
              </span>
            </a>
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
      <section className="service">
        <h1 className="service-title">Tutoring Done Right</h1>
        <span>Private in-person & Online tutoring</span>
        <aside>
          If you want to learn an academic subject or study for an exam, we want
          to be the company you choose. Our tutors are bright and enthusiastic
          and seek out to bring the best of an individual learners potential in
          both academics and live.
        </aside>
        <button className="btn">Book a Session</button>
      </section>
      <section className="">
        <img src={Rect} alt="Rect" className="rectangle" />
        <div className="student">
          <img src={Student} alt="Student" className="stud-img" />
        </div>
      </section>
    </main>
  );
}

export default Home;
