import SemiCircle from "../img/topEllipse.png";
import Student from "../img/student.png";
import Student2 from "../img/student2.png";
import Rect from "../img/rectangle.png";
import Subtract from "../img/subtract.png";
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
          <div>
            <img src={Rect} alt="Rect" className="rectangle" />
            <div className="student">
              <img src={Student} alt="Student" className="stud-img" />
            </div>
          </div>
        </section>
      </div>
      <Hero />
      <section>
        <div className="d-flex d-flex justify-content-around">
          <aside className="align-items-center p-4 d-flex flex-column booking">
            <h1>How our service works</h1>
            <p>
              <span>
                Follow the three steps below to book your first session and get
                started with a tutor.
              </span>
            </p>
          </aside>
          <img src={Subtract} alt="ellipse" className="subtract float-end" />
        </div>

        <div className="student2">
          <img src={Student2} alt="Student with book" className="stud-img" />
        </div>
      </section>
    </main>
  );
}

export default Home;
