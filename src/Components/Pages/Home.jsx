import SemiCircle from "../img/topEllipse.png";
import Leaf from "../img/Vector.png";
import NameBlack from "../img/nameblack.png";
import Tutor from "../img/tutor&student.png";
import "../CSS/styles.css";
import Steps from "../JSX/Steps";
import NavBar from "../JSX/NavBar";
import FB from "../img/fb.png";
import IG from "../img/ig.png";
import TWTR from "../img/twtr.png";
import Hero from "../JSX/Hero";
import Subtract3 from "../img/subtract3.png";
import ReviewSlide from "../JSX/ReviewSlide";

function Home() {
  return (
    <main>
      <section className="top d-flex">
        <img src={SemiCircle} alt="" className="draw1" />
        <NavBar />
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
        <div className="review-container">
          <ReviewSlide />
        </div>
      </section>
      <section className="tutor-sect">
        <img src={Subtract3} alt="icon" style={{ height: "150px" }} />
        <div className="d-flex">
          <div className="tutor px-5 ms-4 ms-sm-2">
            <h1>Want to become a tutor with Learnhall?</h1>
            <aside>
              We hire tutors from a variety of backgrounds both in the US and
              internationally. We pride ourselves on our tutor onboarding
              process and high industy pay. Our tutors work in-person and
              online, and we garner regular inquiries for all academic and test
              prep subjects at all age levels.
              <br />
              If you want to work with us, please click the button below to fill
              out a short form and we will be in contact within 24-48 hours for
              a prospective interview.
            </aside>
            <button className="btn become-btn mt-2">Become a Tutor</button>
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
      <footer className="footer">
        <section className="d-flex">
          <div>
            <span className="d-flex nav-brand">
              <img src={Leaf} alt="Learnhall Logo" className="logo" />
              <img src={NameBlack} alt="Brand Name" className="brand" />
            </span>
            <div className="pt-4 d-flex flex-column">
              <span className="text-white">Let's Connect</span>
              <span>
                <a href="">
                  <img src={FB} alt="facebook" className="social" />{" "}
                </a>
                <a href="">
                  <img src={IG} alt="instagram" className="social" />
                </a>
                <a href="https://twitter.com">
                  <img src={TWTR} alt="Twitter" className="social" />
                </a>
              </span>
              <p className="text-white pt-3">Contact Us</p>
            </div>
          </div>
          <div className="d-flex float-end">
            <aside className="text-white d-flex flex-column">
              <h4>About Us</h4>
              <span>FAQs</span>
              <span>Blog</span>
              <span>Reviews</span>
            </aside>
            <aside className="text-white d-flex flex-column mx-5">
              <h4>Learn With Us</h4>
              <span>Request a Tutor</span>
              <span>Learning Resources</span>
            </aside>
            <aside className="text-white d-flex flex-column mx-5">
              <h4>Work With Us</h4>
              <span>Careers at Learnhall</span>
              <span>Apply to Tutor</span>
            </aside>
          </div>
        </section>
        <div className="float-end">
          <input
            type="text"
            placeholder="email address"
            className="subscribe rounded me-2"
          />
          <button className="btn newsletter-btn">Subscribe</button>
        </div>

        <section className="d-block">
          <hr className="hr" />
          <div className="text-white">
            <p className="float-start">Copyright 2016-2022 Learnhall LLC</p>
            <p className="float-end">Privacy Policy</p>
          </div>
        </section>
      </footer>
    </main>
  );
}

export default Home;
