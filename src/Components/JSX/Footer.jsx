import FB from "../img/fb.png";
import IG from "../img/ig.png";
import TWTR from "../img/twtr.png";
import Leaf from "../img/Vector.png";
import NameBlack from "../img/nameblack.png";
import "../CSS/styles.css";

function Footer() {
  return (
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
              <a href="https://facebook.com">
                <img src={FB} alt="facebook" className="social" />{" "}
              </a>
              <a href="https://instagram.com">
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
      <div className="float-end d-flex">
        <input
          type="text"
          placeholder="email address"
          className="subscribe rounded form-control"
        />
        <button className="btn newsletter-btn ms-1">Subscribe</button>
      </div>

      <section className="d-block">
        <hr className="hr" />
        <div className="text-white">
          <p className="float-start">Copyright 2016-2022 Learnhall LLC</p>
          <p className="float-end">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
