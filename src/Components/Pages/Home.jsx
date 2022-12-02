import SemiCircle from "../img/topEllipse.png";
import "../CSS/styles.css";
import Steps from "../JSX/Steps";
import NavBar from "../JSX/NavBar";
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
        <div>
          <ReviewSlide />
        </div>
      </section>
      <section className="mt-4">
        <img src={Subtract3} alt="icon" style={{ height: "150px" }} />
        <div className="tutor px-5 ms-4">
          <h1>Want to become a tutor with Learnhall?</h1>
          <aside>
            We hire tutors from a variety of backgrounds both in the US and
            internationally. We pride ourselves on our tutor onboarding process
            and high industy pay. Our tutors work in-person and online, and we
            garner regular inquiries for all academic and test prep subjects at
            all age levels. If you want to work with us, please click the button
            below to fill out a short form and we will be in contact within
            24-48 hours for a prospective interview.
          </aside>
          <button className="btn become-btn mt-2">Become a Tutor</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
