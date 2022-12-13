import FB from "../img/fb.png";
import IG from "../img/ig.png";
import TWTR from "../img/twtr.png";
import Leaf from "../img/leaf.png";
import NameBlack from "../img/nameblack.png";
import Call from "../img/telephone.png";
import Message from "../img/message.png";
import "../CSS/styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="d-flex justify-content-between my-container">
        <div className="footer-sect1">
          <div className="d-flex nav-brand2">
            <img src={Leaf} alt="Learnhall Logo" className="logo-footer" />
            <img src={NameBlack} alt="Brand Name" className="brand" />
          </div>
          <div className="mt-4 contact-sect ms-3 ms-lg-0 mx-auto">
            <div>
              <h4 className="social-title">Let's Connect</h4>
              <div className="d-block socials">
                <a
                  href="https://www.facebook.com/learnhalltutoring"
                  className="me-2"
                >
                  <img src={FB} alt="facebook" className="social" />
                </a>
                <a href="https://instagram.com" className="me-2">
                  <img src={IG} alt="instagram" className="social" />
                </a>
                <a href="https://www.twitter.com/learnhall" className="me-2">
                  <img src={TWTR} alt="Twitter" className="social" />
                </a>
              </div>
            </div>
            <div className="pt-lg-3 mx-3 mx-lg-0">
              <h4 className="social-title">Contact Us</h4>
              <div className="d-block socials">
                <a href="tel:503-342-7214" className="me-2">
                  <img src={Call} alt="telephone" className="social" />
                </a>
                <a href="mailto:info@learnhall.com" className="me-2">
                  <img src={Message} alt="email" className="social" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex pb-2 foot-links">
          <div className="text-white me-2 d-block mx-lg-5">
            <h4 className="d-block text-nowrap">About Us</h4>
            <Link to="/faqs" className="d-block">
              FAQs
            </Link>
            <span className="d-block">Blog</span>
            <span className="d-block">Reviews</span>
          </div>
          <div className="text-white d-block mx-2 mx-lg-5">
            <h4 className="d-block text-nowrap">Learn With Us</h4>
            <Link to="/book-session" className="d-block">
              Request a Tutor
            </Link>
            <span className="d-block">Learning Resources</span>
          </div>
          <div className="text-white d-block mx-2 mx-lg-5">
            <h4 className="d-block text-nowrap">Work With Us</h4>
            <Link to="/become-tutor" className="d-block">
              Careers at Learnhall
            </Link>
            <Link to="/become-tutor" className="d-block">
              Apply to Tutor
            </Link>
          </div>
        </div>
      </section>
      <div className="subs-div">
        <p className="pt-2 newsletter">Subscribe to our free e-newsletter</p>
        <div className="d-flex">
          <input
            type="text"
            placeholder="email address"
            className="subscribe form-control"
          />
          <button className="btn newsletter-btn ms-1">Subscribe</button>
        </div>
      </div>
      <div className="footer-sectsm">
        <div className="d-flex nav-brand2">
          <img src={Leaf} alt="Learnhall Logo" className="logo-footer" />
          <img src={NameBlack} alt="Brand Name" className="brand" />
        </div>
        <div className="mt-4 contact-sect ms-3 ms-lg-0 mx-auto">
          <div>
            <h4 className="social-title">Let's Connect</h4>
            <div className="d-block socials">
              <a href="https://facebook.com" className="me-2">
                <img src={FB} alt="facebook" className="social" />{" "}
              </a>
              <a href="https://instagram.com" className="me-2">
                <img src={IG} alt="instagram" className="social" />
              </a>
              <a href="https://twitter.com" className="me-2">
                <img src={TWTR} alt="Twitter" className="social" />
              </a>
            </div>
          </div>
          <div className="pt-lg-3 mx-3 mx-lg-0">
            <h4 className="social-title">Contact Us</h4>
            <div className="d-block socials">
              <a href="tel:123-456-789" className="me-2">
                <img src={Call} alt="telephone" className="social" />
              </a>
              <a href="mailto:customercare@learnhall.com" className="me-2">
                <img src={Message} alt="email" className="social" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="d-block copyright">
        <hr className="hr" />
        <div className="text-white">
          <p className="float-start">Copyright 2016-2025 Learnhall LLC</p>
          <p className="float-end">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
