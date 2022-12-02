import "../CSS/styles.css";
import One from "../img/one.png";
import Two from "../img/two.png";
import Three from "../img/three.png";
import Student2 from "../img/student2.png";
import Subtract from "../img/subtract.png";
import Subtract2 from "../img/subtract2.png";

function Steps() {
  return (
    <section className="py-5 our-services">
      <div className="d-flex d-flex justify-content-around">
        <aside className="align-items-center p-4 d-flex flex-column booking">
          <h1 className="booking-text">How our service works</h1>
          <p className="booking-text">
            <span>
              Follow the three steps below to book your first session and get
              started with a tutor.
            </span>
          </p>
        </aside>
        <img src={Subtract} alt="ellipse" className="subtract float-end" />
      </div>
      <aside className="d-flex step-sect">
        <div>
          <div className="student2">
            <img src={Student2} alt="Student with book" className="stud-img" />
          </div>
          <img src={Subtract2} alt="subtract" className="subtract2" />
        </div>
        <div className="all-steps">
          <div className="d-flex flex-row mx-1 ">
            <img src={One} alt="One" className="num-fig" />
            <div className="border-0 shadow text-box justify-content-center step">
              <h3 className="step-title">Step One</h3>
              <div className="px-3 d-flex flex-column">
                <span className="">
                  Inquire about our tutoring services by filling-out
                </span>
                <span className="">
                  and submitting the “Book a Session” form.
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row my-3">
            <img src={Two} alt="One" className="num-fig" />
            <div className="border-0 shadow text-box p-2 step">
              <h3 className="step-title">Step Two</h3>
              <div className="px-3 d-flex flex-column">
                <span>Within 24 hours an advisor will contact you to go</span>
                <span>over the student's tutoring goals & needs.</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row my-3">
            <img src={Three} alt="One" className="num-fig" />
            <div className="border-0 shadow text-box p-2 step">
              <h3 className="step-title">Step Three</h3>
              <div className="px-3 d-flex flex-column">
                <span>The advisor will find an ideal tutor match and set</span>
                <span>up a free session to ensure s/he is the right fit.</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Steps;
