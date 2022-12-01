import "../CSS/styles.css";
import Diamond from "../img/diamond2.png";
import Arrow from "../img/arrow.png";
import Star from "../img/star.png";
import Heart from "../img/heart.png";

function Hero() {
  return (
    <main>
      <section className="hero">
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
      <div className="d-flex justify-content-center p-5">
        <div
          className="card py-3 mx-2 shadow border-0"
          style={{ width: "14rem" }}
          id="card"
        >
          <img src={Diamond} class="card-img-top " alt="..." id="card-img" />
          <div class="card-body">
            <h5 class="card-title">Well-Vetted Tutors</h5>
            <p class="card-text">
              Our tutors are highly qualified, passionate, and well-educated at
              top universities.
            </p>
          </div>
        </div>
        <div
          className="card py-3 mx-3 shadow border-0"
          style={{ width: "14rem" }}
          id="card"
        >
          <img src={Arrow} class="card-img-top " alt="..." id="card-img" />
          <div class="card-body">
            <h5 class="card-title">We Come to You</h5>
            <p class="card-text">
              We meet at the pupil's home or local library and we also offer
              online lessons.
            </p>
          </div>
        </div>
        <div
          className="card py-3 mx-3 shadow border-0"
          style={{ width: "14rem" }}
          id="card"
        >
          <img src={Star} class="card-img-top " alt="..." id="card-img" />
          <div class="card-body">
            <h5 class="card-title">Your Future</h5>
            <p class="card-text">
              We share knowledge that can help in all areas of life, not just
              the subject/s we are focusing on.
            </p>
          </div>
        </div>
        <div
          className="card py-3 mx-3 shadow border-0"
          style={{ width: "14rem" }}
          id="card"
        >
          <img src={Heart} class="card-img-top " alt="..." id="card-img" />
          <div class="card-body">
            <h5 class="card-title">We Love Effort</h5>
            <p class="card-text">
              The growth mindset is a lifelong asset. The result isn't nearly as
              important as the effort.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
