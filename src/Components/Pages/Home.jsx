import SemiCircle from "../img/topEllipse.png";
import Student from "../img/student.png";
import Rect from "../img/rectangle.png";
import "../CSS/styles.css";

import NavBar from "../JSX/NavBar";
import Hero from "../JSX/Hero";

function Home() {
  return (
    <main>
      <section className="top d-flex">
        <img src={SemiCircle} alt="" className="draw1" />
        <NavBar />
      </section>
      <div className="d-flex justify-content-between">
        <section className="service">
          <h1 className="service-title">Tutoring Done Right</h1>
          <span>Private in-person & Online tutoring</span>
          <aside className="about-service">
            If you want to learn an academic subject or study for an exam, we
            want to be the company you choose. Our tutors are bright and
            enthusiastic and seek out to bring the best of an individual
            learners potential in both academics and live.
          </aside>
          <button className="btn">Book a Session</button>
        </section>
        <section className="float-end">
          <img src={Rect} alt="Rect" className="rectangle" />
          <div className="student">
            <img src={Student} alt="Student" className="stud-img" />
          </div>
        </section>
      </div>

      <Hero />
    </main>
  );
}

export default Home;
