import "../CSS/styles.css";
import Diamond from "../img/diamond2.png";
import Arrow from "../img/arrow.png";
import Star from "../img/star.png";
import Student from "../img/student.png";
import StudentSm from "../img/studimg-sm.png";
import StudSub from "../img/stud-sub.png";
import Heart from "../img/heart.png";

function Hero() {
  return (
    <main>
      <div className="d-flex justify-content-between done-right">
        <section className="service">
          <h1 className="service-title">Tutoring Done Right</h1>
          <span>Private in-person & Online tutoring</span>
          <aside className="about-service">
            If you want to learn an academic subject or study for an exam, we
            want to be the company you choose. Our tutors are bright and
            enthusiastic and seek out to bring the best of an individual
            learners potential in both academics and live.
          </aside>
          <img src={StudentSm} alt="Student" className="stud-img-sm" />
          <button className="btn book-btn">Book a Session</button>
        </section>
        <section className="stud-sect">
          <div className="rectangle position-absolute">
            <div className="student">
              <img src={Student} alt="Student" className="stud-img" />
            </div>
            <img
              src={StudSub}
              alt="svg"
              style={{ height: "150px" }}
              className="stud-sub"
            />
          </div>
        </section>
      </div>
      <section className="hero mt-5">
        <h1>Why you should choose us</h1>
        <aside>
          <span>
            We love tutoring and we value the student's process. Our tutors
            focus on each
          </span>
          <br />
          <span>
            individual student and tailor the lessons around how s/he learns
            best.
          </span>
        </aside>
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
