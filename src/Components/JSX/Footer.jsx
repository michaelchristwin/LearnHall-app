import FB from "../img/fb.png";
import IG from "../img/ig.png";
import TWTR from "../img/twtr.png";
import Leaf from "../img/Vector.png";
import NameBlack from "../img/nameblack.png";
import Call from "../img/telephone.png";
import Message from "../img/message.png";
import "../CSS/styles.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="d-flex justify-content-between my-container">
        <div className="footer-sect1">
          <span className="d-flex nav-brand2">
            <img src={Leaf} alt="Learnhall Logo" className="logo" />
            <img src={NameBlack} alt="Brand Name" className="brand" />
          </span>
          <div className="mt-4 contact-sect">
            <div>
              <span className="text-white">Let's Connect</span>
              <div className="d-block socials">
                <a href="https://facebook.com">
                  <img src={FB} alt="facebook" className="social" />{" "}
                </a>
                <a href="https://instagram.com">
                  <img src={IG} alt="instagram" className="social" />
                </a>
                <a href="https://twitter.com">
                  <img src={TWTR} alt="Twitter" className="social" />
                </a>
              </div>
            </div>
            <div className="pt-lg-3 mx-3 mx-lg-0">
              <span className="text-white">Contact Us</span>
              <div className="d-block socials">
                <a href="tel:123-456-789">
                  <img src={Call} alt="telephone" className="social" />{" "}
                </a>
                <a href="mailto:customercare@learnhall.com">
                  <img src={Message} alt="email" className="social" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="text-white d-block mx-lg-5">
            <h4 className="d-block text-nowrap">About Us</h4>
            <span className="d-block">FAQs</span>
            <span className="d-block">Blog</span>
            <span className="d-block">Reviews</span>
          </div>
          <div className="text-white d-block mx-auto mx-lg-5">
            <h4 className="d-block text-nowrap">Learn With Us</h4>
            <span className="d-block">Request a Tutor</span>
            <span className="d-block">Learning Resources</span>
          </div>
          <div className="text-white d-block mx-auto mx-lg-5">
            <h4 className="d-block text-nowrap">Work With Us</h4>
            <span className="d-block">Careers at Learnhall</span>
            <span className="d-block">Apply to Tutor</span>
          </div>
        </div>
      </section>
      <div className="pt-3 float-end d-flex">
        <input
          type="text"
          placeholder="email address"
          className="subscribe rounded form-control"
        />
        <button className="btn newsletter-btn ms-1">Subscribe</button>
      </div>
      <section className="d-block p-2">
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
