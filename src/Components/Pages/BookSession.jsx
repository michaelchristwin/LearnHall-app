import Footer from "../JSX/Footer";
import { useState } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";
import ScrollToTop from "react-scroll-to-top";
import NavbarEx from "../JSX/NavbarEx";

function Booking() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <main>
      <NavbarEx activeid={"active"} />
      <section className="d-flex py-3 form-parent mt-5">
        <form className="px-5 py-5 shadow my-form rounded">
          <h3>Book a Session</h3>
          <div className="d-flex flex-column">
            <span className="formt-lg">
              Please fill out the form below and submit, and we will get back to
              you
            </span>
            <span className="formt-lg">within 24 business hours.</span>
            <p className="formt-sm">
              Please fill out the form below and submit, and we will get back to
              you about your tutoring needs within 24 business hours.
            </p>
          </div>
          <div className="mt-4">
            <fieldset className="mx-auto col-sm">
              <label htmlFor="lname" className="d-block">
                Name*
              </label>
              <input
                type="text"
                id="lname"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto col-sm pt-3">
              <label htmlFor="email" className="d-block">
                Email*
              </label>
              <input
                type="text"
                id="email"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>

          <fieldset className="mx-auto col-sm pt-3">
            <label htmlFor="phone" className="d-block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="d-form form-control d-block"
            />
          </fieldset>

          <label htmlFor="textarea" className="ms-2 d-block mt-5">
            Why does the student need tutoring?
          </label>
          <textarea
            name="review"
            id="textarea"
            className="form-control"
            rows="8"
          ></textarea>
          <button
            className="btn sub-btn px-4"
            type="submit"
            onClick={() => setModalShow(true)}
          >
            Submit
          </button>
        </form>
      </section>
      <section>
        <ScrollToTop smooth />
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
