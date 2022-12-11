import Footer from "../JSX/Footer";
import Phone from "../img/tel-cont.png";
import Email from "../img/email-cont.png";
import { useState } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";
import NavbarEx from "../JSX/NavbarEx";

function Booking() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <main>
      <NavbarEx activeid={"active"} />
      <section className="d-flex justify-content-around py-3 form-parent">
        <div className="px-4 py-5 shadow me-5 my-form rounded">
          <h3>Book a Session</h3>
          <p className="d-flex flex-column">
            <span>
              Please fill out the form below and submit, and we will get back to
              you about your
            </span>
            <span>tutoring needs within 24 business hours.</span>
          </p>
          <div className="d-flex row row-cols-1 row-cols-lg-2">
            <fieldset className="mx-auto col-sm">
              <label htmlFor="flname" className="d-block">
                First Name*
              </label>
              <input
                type="text"
                id="flname"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto col-sm">
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
          <div className="d-flex pt-3 row row-cols-1 row-cols-lg-2">
            <fieldset className="mx-auto col-sm">
              <label htmlFor="email" className="d-block">
                Email*
              </label>
              <input
                type="text"
                id="email"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto col-sm">
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
          <div className="d-flex pt-3 row row-cols-1 row-cols-lg-2">
            <fieldset className="mx-auto col-sm">
              <label htmlFor="location" className="d-block">
                Location*
              </label>
              <input
                type="text"
                id="location"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto col-sm">
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
          <div className="d-flex pt-3 row row-cols-1 row-cols-lg-2">
            <fieldset className="mx-auto col-sm">
              <label htmlFor="sgrade" className="d-block">
                Student Grade*
              </label>
              <input
                type="text"
                id="sgrade"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto col-sm">
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
          <textarea
            name="review"
            id="textarea"
            className="form-control"
            rows="8"
          ></textarea>
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
          <span>You can also contact us with any </span>
          <br />
          <span>questions via phone or email.</span>
          <img src={Phone} alt="Phone" className="contact-img" />
          <img src={Email} alt="Email" className="pt-2 contact-img" />
        </div>
      </section>
      <section>
        <Footer />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          id={"Session"}
        />
      </section>
    </main>
  );
}

export default Booking;
