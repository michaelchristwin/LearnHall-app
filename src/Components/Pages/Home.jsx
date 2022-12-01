import SemiCircle from "../img/topEllipse.png";
import "../CSS/styles.css";
import Steps from "../JSX/Steps";
import Reviews from "../JSX/Reviews";
import NavBar from "../JSX/NavBar";
import Hero from "../JSX/Hero";
import ReviewData from "../JSX/ReviewData";

function Home() {
  const ReviewElement = ReviewData[0].map((data) => {
    return <Reviews name={data.name} review={data.review} key={data.name} />;
  });
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
        <div className="d-flex">{ReviewElement}</div>
      </section>
    </main>
  );
}

export default Home;
