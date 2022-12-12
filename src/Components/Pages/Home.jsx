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
      <section id="top">
        <img src={SemiCircle} alt="" className="draw1" />
        <NavbarEx state={"active"} />
      </section>
      <Hero />
      <Steps />
      <section className="text-center mt-4">
        <div className="what-parent">
          <h1>What parents are saying</h1>
          <span className="what-say">
            Read the reviews below to see what students' parents are saying
            about
          </span>
          <br className="what-sm" />
          <span className="what-say">
            Learnhall on Google for our tutoring serivces.
          </span>
        </div>

        <div className="rv-sm">
          <ReviewSlideSM />
        </div>
        <div className="review-container">
          <ReviewSlide />
        </div>
      </section>
      <section className="tutor-sect">
        <img src={Subtract3} alt="icon" className="sub-tut" />
        <div>
          <div className="tutor d-block px-2 px-lg-0">
            <h1 className="want-tut">
              Want to become a<br className="tut-break" />
              tutor with Learnhall?
            </h1>
            <aside className="text-left">
              <span className="d-block why-lg">
                We hire tutors from a variety of backgrounds both in
              </span>
              <span className="d-block why-lg">
                the US and internationally. We pride ourselves on our
              </span>
              <span className="d-block why-lg">
                tutor onboarding process and high industy pay. Our
              </span>
              <span className="d-block why-lg">
                tutors work in-person and online, and we garner
              </span>
              <span className="d-block why-lg">
                regular inquiries for all academic and test prep
              </span>
              <span className="d-block why-lg">
                subjects at all age levels.
              </span>
              <br className="why-lg" />
              <span className="d-block why-sm">
                If you want to work with us, please click the button
              </span>
              <span className="d-block why-sm">
                below to fill out a short form and we will be in contact
              </span>
              <span className="d-block why-sm">
                within 24-48 hours for a prospective interview.
              </span>
            </aside>
            <img src={TutorSm} alt="Tutor" className="tutor-sm mt-2" />
            <button className="btn become-btn mt-2">
              <Link to={`${BaseUrl}/become-tutor`}>Become a Tutor</Link>
            </button>
          </div>
          <div className="tutor-images float-end">
            <div className="back-image">
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
