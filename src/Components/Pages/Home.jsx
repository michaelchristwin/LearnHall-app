import SemiCircle from "../img/topEllipse.png";
import Tutor from "../img/tutor&student.png";
import "../CSS/styles.css";
import Steps from "../JSX/Steps";
import { Link } from "react-router-dom";
import Hero from "../JSX/Hero";
import Footer from "../JSX/Footer";
import Subtract3 from "../img/subtract3.png";
import ReviewSlide from "../JSX/ReviewSlide";
import NavbarEx from "../JSX/NavbarEx";
import TutorSm from "../img/tutor-sm.png";
import BaseUrl from "../JSX/BaseUrl";
import ReviewSlideSM from "../JSX/ReviewSlideSM";

function Home() {
  return (
    <main className="overflow-hidden">
      <section>
        <img src={SemiCircle} alt="" className="draw1" />
        <NavbarEx className={{ className: "active" }} />
      </section>
      <Hero />
      <Steps />
      <section className="text-center mt-4">
        <h1>What parents are saying</h1>
        <span>
          Read the reviews below to see what students' parents are saying about
        </span>
        <br />
        <span>Learnhall on Google for our tutoring serivces.</span>
        <div className="rv-sm">
          <ReviewSlideSM />
        </div>
        <div className="review-container">
          <ReviewSlide />
        </div>
      </section>
      <section className="tutor-sect">
        <img
          src={Subtract3}
          alt="icon"
          style={{ height: "150px" }}
          className="sub-tut"
        />
        <div className="d-flex">
          <div className="tutor px-3 px-lg-5 mx-auto ms-lg-2">
            <h1>Want to become a tutor with Learnhall?</h1>
            <aside className="text-left">
              <span className="d-block">
                We hire tutors from a variety of backgrounds both in
              </span>
              <span className="d-block">
                the US and internationally. We pride ourselves on our
              </span>
              <span className="d-block">
                tutor onboarding process and high industy pay. Our
              </span>
              <span className="d-block">
                tutors work in-person and online, and we garner
              </span>
              <span className="d-block">
                regular inquiries for all academic and test prep
              </span>
              <span className="d-block">subjects at all age levels.</span>
              <br />
              <span className="d-block">
                If you want to work with us, please click the button
              </span>
              <span className="d-block">
                below to fill out a short form and we will be in contact
              </span>
              <span className="d-block">
                within 24-48 hours for a prospective interview.
              </span>
            </aside>
            <img src={TutorSm} alt="Tutor" className="tutor-sm mt-2" />
            <button className="btn become-btn mt-2">
              <Link to={`${BaseUrl}/become-tutor`}>Become a Tutor</Link>
            </button>
          </div>
          <div className="tutor-images">
            <div className="back-image position-absolute">
              <div className="rect2 position-absolute start-40">
                <img src={Tutor} alt="Tutor & Student" className="top-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
