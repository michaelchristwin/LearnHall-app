import "../CSS/styles.css";
import Diamond from "../img/diamond2.png";
import Arrow from "../img/arrow.png";
import Star from "../img/star.png";
import Student from "../img/student.png";
import StudentSm from "../img/studimg-sm.png";
import StudSub from "../img/stud-sub.png";
import Heart from "../img/heart.png";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";

function Hero() {
  return (
    <main>
      <div className="d-flex justify-content-between done-right">
        <section className="service">
          <h1 className="d-block service-title">
            Tutoring{` `}
            <br className="break" />
            Done Right
          </h1>
          <span className="private">Private in-person & Online tutoring</span>
          <aside className="mt-3 about-service">
            <span className="d-block">
              If you want to learn an academic subject for study for
            </span>
            <span className="d-block">
              an exam, we want to be the company you choose.
            </span>
            <span className="d-block">
              Our tutors are bright and enthusiastic and seek to
            </span>
            <span className="d-block">
              bring the best of an individual learners potential
            </span>
            <span className="d-block">in both academics and live.</span>
          </aside>
          <img src={StudentSm} alt="Student" className="stud-img-sm" />
          <button className="btn book-btn">
            <Link to={`${BaseUrl}/book-session`}>Book a Session</Link>
          </button>
        </section>
        <section className="stud-sect">
          <div className="rectangle position-absolute">
            <div className="student">
              <img src={Student} alt="Student" className="stud-img" />
            </div>
            <img src={StudSub} alt="svg" className="stud-sub" />
          </div>
        </section>
      </div>
      <section className="hero mt-5">
        <h1>Why you should choose us</h1>
        <aside className="choose">
          <span>
            We love tutoring and we value the student's process. Our tutors
            focus on each
          </span>
          <br className="break" />
          <span className="choose">
            individual student and tailor the lessons around how s/he learns
            best.
          </span>
        </aside>
        <div className="choice">
          <span className="d-block">
            {" "}
            We love tutoring and we value the student's
          </span>
          <span className="d-block">
            Our tutors focus on each individual student
          </span>
          <span className="d-block">
            and tailor the lessons around how s/he learns best.
          </span>
        </div>
      </section>
      <div className="d-flex row row-cols-2 row-cols-lg-4 g-lg-1 justify-content-center p-lg-5 why-sect">
        <div className="col-sm ">
          <div
            className="card py-lg-3 mx-lg-1 mx-md-1 shadow border-0"
            id="card"
          >
            <img
              src={Diamond}
              className="card-img-top "
              alt="..."
              id="card-img"
            />
            <div className="card-body">
              <h5 className="card-title">Well-Vetted Tutors</h5>
              <p className="card-text">
                Our tutors are highly qualified, passionate, and well-educated
                at top universities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm ">
          <div
            className="card py-lg-3 mx-lg-1 mx-md-1 shadow border-0"
            id="card"
          >
            <img
              src={Arrow}
              className="card-img-top "
              alt="..."
              id="card-img"
            />
            <div className="card-body">
              <h5 className="card-title">We Come to You</h5>
              <p className="card-text">
                We meet at the pupil's home or local library and we also offer
                online lessons.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div
            className="card py-lg-3 mx-lg-1 mx-md-1 shadow border-0"
            id="card"
          >
            <img src={Star} className="card-img-top " alt="..." id="card-img" />
            <div className="card-body">
              <h5 className="card-title">Your Future</h5>
              <p className="card-text">
                We share knowledge that can help in all areas of life, not just
                the subject/s we are focusing on.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card py-lg-3 shadow border-0" id="card">
            <img
              src={Heart}
              className="card-img-top "
              alt="..."
              id="card-img"
            />
            <div className="card-body">
              <h5 className="card-title">We Love Effort</h5>
              <p className="card-text">
                The growth mindset is a lifelong asset. The result isn't nearly
                as important as the effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
