import Footer from "../JSX/Footer";
import NavBar from "../JSX/NavBar";
import Phone from "../img/tel-cont.png";
import Email from "../img/email-cont.png";
import { useState } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";

function Booking() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <main>
      <NavBar />
      <section className="d-flex justify-content-center pt-3">
        <div className="p-5 shadow me-5 my-form rounded mb-3">
          <h3>Book a session</h3>
          <p className="d-flex flex-column">
            <span>
              Please fill out the form below and submit, and we will get back to
              you about your
            </span>
            <span>tutoring needs within 24 business hours.</span>
          </p>
          <div className="d-flex">
            <fieldset className="mx-auto">
              <label htmlFor="flname" className="d-block">
                First Name*
              </label>
              <input
                type="text"
                id="flname"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="lname" className="d-block">
                Last Name*
              </label>
              <input
                type="text"
                id="lname"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <div className="d-flex pt-3">
            <fieldset className="mx-auto">
              <label htmlFor="email" className="d-block">
                Email*
              </label>
              <input
                type="text"
                id="email"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="phone" className="d-block">
                Phone*
              </label>
              <input
                type="text"
                id="phone"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <div className="d-flex pt-3">
            <fieldset className="mx-auto">
              <label htmlFor="location" className="d-block">
                Location*
              </label>
              <input
                type="text"
                id="location"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="zip" className="d-block">
                Zip Code*
              </label>
              <input
                type="text"
                id="zip"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <div className="d-flex pt-3">
            <fieldset className="mx-auto">
              <label htmlFor="sgrade" className="d-block">
                Student Grade*
              </label>
              <input
                type="text"
                id="sgrade"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="s-subject" className="d-block">
                Student Subject*
              </label>
              <input
                type="text"
                id="s-subject"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <label htmlFor="textarea" className="ms-2 d-block mt-5">
            Why does the student need tutoring? (optional)
          </label>
          <textarea name="review" id="textarea" cols="50" rows="8"></textarea>
          <div className="justify-content-center d-flex">
            <button
              className="btn sub-btn px-4"
              type="submit"
              onClick={() => setModalShow(true)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="shadow p-4 in-touch d-flex flex-column">
          <h4>Get In Touch</h4>
          <span>You can also contact us with any questions</span>
          <br />
          <span>via phone or email.</span>
          <img src={Phone} alt="Phone" className="contact-img" />
          <img src={Email} alt="Email" className="pt-2 contact-img" />
        </div>
      </section>
      <Footer />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={"Session"}
      />
    </main>
  );
}

export default Booking;
