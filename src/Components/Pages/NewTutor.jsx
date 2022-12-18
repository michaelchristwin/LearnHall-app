import "../CSS/styles.css";
import Dollar from "../img/dollar.png";
import Work from "../img/work.png";
import Scholar from "../img/scholar.png";
import Footer from "../JSX/Footer";
import { useState, useEffect } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";
import NavbarEx from "../JSX/NavbarEx";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";

function NewTutor() {
  const [modalShow, setModalShow] = useState(false);
  const [sessiondata, setsessiondata] = useState({
    username: "",
    email: "",
    phone: "",
    tell: "",
  });
  console.log(sessiondata);
  const [sessionerror, setsessionerror] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

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
    if (
      typeof sessionerror === "object" &&
      sessionerror !== null &&
      Object.keys(sessionerror).length === 0 &&
      isSubmit
    ) {
      console.log(sessiondata);
    }
  }, [sessionerror]);

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

  function handleinput(e) {
    setsessiondata({ ...sessiondata, [e.target.name]: e.target.value });
  }
  return (
    <main>
      <NavbarEx active={"active"} />
      <section className="d-flex pt-3 form-parent mt-5">
        <form className="px-5 py-5 shadow my-form rounded">
          <h3>Become a Tutor</h3>
          <div className="d-flex flex-column">
            <span className="formt-lg">
              Please fill out the form below, submit it,
            </span>
            <span className="formt-lg">
              and we will get back to you within 24 to 48 business hours.
            </span>
            <p className="formt-sm">
              Please fill out the form below, submit it, and we will get back to
              you within 24 to 48 business hours.
            </p>
          </div>

          <fieldset className="mx-auto col-sm pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.username
                : ""}
            </p>
            <label htmlFor="lname" className="d-block">
              Name*
            </label>
            <input
              type="text"
              id="lname"
              className="d-form form-control d-block"
              name="username"
              onChange={handleinput}
            />
          </fieldset>
          <fieldset className="mx-auto col-sm pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.email
                : ""}
            </p>
            <label htmlFor="email" className="d-block">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="d-form form-control d-block"
              onChange={handleinput}
            />
          </fieldset>

          <fieldset className="mx-auto col-sm pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.phone
                : ""}
            </p>
            <label htmlFor="phone" className="d-block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="d-form form-control d-block"
              onKeyPress={keyPress}
              onChange={handleinput}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="textarea1" className=" d-block mt-5">
              Tell us about yourself?
            </label>
            <textarea
              name="tell"
              id="textarea1"
              className="form-control"
              rows="8"
              onChange={handleinput}
            ></textarea>
          </fieldset>
          <button
            className="btn sub-btn px-4"
            type="submit"
            onClick={handleinputdata}
          >
            Submit
          </button>
        </form>
        <div className="shadow p-4 why-join d-flex flex-column text-center ">
          <h4>Why Join Us?</h4>
          <span>Make Money While Making a</span>
          <span>Difference in Students Lives</span>
          <img src={Dollar} alt="dollar" className="join-img mx-auto my-3" />
          <p>Earn a Steady Income</p>
          <hr className="join-hr mx-auto" />
          <img src={Work} alt="work" className="join-img mx-auto my-2" />
          <p>Work from Anywhere</p>
          <hr className="join-hr mx-auto" />
          <img src={Scholar} alt="scholar" className="join-img mx-auto my-2" />
          <p>Help students Succeed</p>
        </div>
      </section>
      <ScrollToTop smooth />
      <Footer />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={"Tutor"}
      />
    </main>
  );
}

export default NewTutor;
