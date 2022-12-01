import SemiCircle from "../img/topEllipse.png";

import Student2 from "../img/student2.png";

import Subtract from "../img/subtract.png";
import Subtract2 from "../img/subtract2.png";
import "../CSS/styles.css";
import One from "../img/one.png";

import NavBar from "../JSX/NavBar";
import Hero from "../JSX/Hero";

function Home() {
  return (
    <main>
      <section className="top d-flex">
        <img src={SemiCircle} alt="" className="draw1" />
        <NavBar />
      </section>
      <Hero />
      <section className="py-5">
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
        <aside className="d-flex justify-content-between step-sect">
          <div>
            <div className="student2">
              <img
                src={Student2}
                alt="Student with book"
                className="stud-img"
              />
            </div>
            <img src={Subtract2} alt="subtract" className="subtract2" />
          </div>
          <div className="d-flex flex-row steps">
            <img src={One} alt="One" className="num-fig" />
            <div className="border-0 shadow text-box">
              <h3 className="step-title">Step One</h3>
              <span>Inquire about our tutoring services by filling-out</span>
              <br />
              <span>and submitting the “Book a Session” form.</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Home;
