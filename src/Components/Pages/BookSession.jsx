import Footer from "../JSX/Footer";
import { useState, useEffect } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";
import ScrollToTop from "react-scroll-to-top";
import NavbarEx from "../JSX/NavbarEx";
import axios from "axios";

function Booking() {
  const [modalShow, setModalShow] = useState(false);
  const [sessiondata, setsessiondata] = useState({
    username: "",
    email: "",
    phone: "",
    why: "",
  });
  const [sessionerror, setsessionerror] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  console.log(sessiondata);

  function handleinputdata(e) {
    e.preventDefault();
    setsessionerror(validate(sessiondata));
    setisSubmit(true);
    axios
      .post("http://127.0.0.1:8000/employee/x/", sessiondata)
      .then((response) => {
        console.log(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }

  useEffect(() => {
    console.log(sessionerror);
    if (Object.keys(sessionerror).length === 0 && isSubmit) {
      console.log(sessiondata);
      setModalShow(true);
    }
  }, [sessionerror]);

  function handleinput(e) {
    setsessiondata({ ...sessiondata, [e.target.name]: e.target.value });
  }
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
      return errors;
    }
  };
  function keyPress(e) {
    var charCode = e.charCode;
    var value = e.target.value;
    if (charCode !== 0 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
    if (!/^\d+$/.test(value)) {
      e.target.value = value.replace(/[^\d]/g, "");
    }
  }
  return (
    <main>
      <NavbarEx activeid={"active"} />
      <section className="d-flex py-3 form-parent mt-5">
        <form className="px-5 py-5 shadow my-form rounded needs-validation">
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
              <p className="form-error">{sessionerror.username}</p>
              <label htmlFor="lname" className="d-block">
                Name*
              </label>
              <input
                required
                type="text"
                className="d-form form-control d-block"
                name="username"
                onChange={handleinput}
              />
            </fieldset>
            <fieldset className="mx-auto col-sm pt-3">
              <p className="form-error">{sessionerror.email}</p>
              <label htmlFor="email" className="d-block">
                Email*
              </label>
              <input
                required
                type="email"
                id="email"
                className="d-form form-control d-block"
                name="email"
                onChange={handleinput}
              />
            </fieldset>
          </div>

          <fieldset className="mx-auto col-sm pt-3">
            <p className="form-error">{sessionerror.phone}</p>
            <label htmlFor="phone" className="d-block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={12}
              className="d-form form-control d-block"
              name="phone"
              onKeyPress={keyPress}
              onChange={handleinput}
            />
          </fieldset>

          <label htmlFor="textarea" className="ms-2 d-block mt-5">
            Why does the student need tutoring?
          </label>
          <textarea
            id="textarea"
            className="form-control"
            rows="8"
            name="why"
            onChange={handleinput}
          ></textarea>
          <button
            className="btn sub-btn px-4"
            type="submit"
            onClick={handleinputdata}
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
