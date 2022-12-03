import NavBar from "../JSX/NavBar";
import "../CSS/styles.css";
import Dollar from "../img/dollar.png";
import Work from "../img/work.png";
import Scholar from "../img/scholar.png";
import Footer from "../JSX/Footer";

function NewTutor() {
  return (
    <main>
      <NavBar />
      <section className="d-flex justify-content-center pt-3">
        <div className="p-5 shadow me-5 my-form rounded mb-3">
          <h3>Become a Tutor</h3>
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
              <label htmlFor="hledu" className="d-block">
                Highest level of Education*
              </label>
              <input
                type="text"
                id="hledu"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="school" className="d-block">
                School*
              </label>
              <input
                type="text"
                id="school"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="textarea1" className="ms-2 d-block mt-5">
              Tell us about yourself?*
            </label>
            <textarea
              name="review"
              id="textarea1"
              cols="50"
              rows="8"
            ></textarea>
          </fieldset>
          <fieldset>
            <label htmlFor="textarea2" className="ms-2 d-block mt-5">
              Tell us about your experience tutoring and what subjects you
              teach?*
            </label>
            <textarea
              name="review"
              id="textarea2"
              cols="50"
              rows="8"
            ></textarea>
          </fieldset>
          <div className="justify-content-center d-flex">
            <button className="btn sub-btn px-4" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="shadow p-4 in-touch d-flex flex-column text-center ">
          <h4>Why join us?</h4>
          <span>Make money while making a</span>
          <span>difference in students lives</span>
          <img src={Dollar} alt="dollar" className="join-img mx-auto my-3" />
          <p>Earn a Steady income</p>
          <hr className="join-hr mx-auto" />
          <img src={Work} alt="work" className="join-img mx-auto my-2" />
          <p>Work from anywhere</p>
          <hr className="join-hr mx-auto" />
          <img src={Scholar} alt="scholar" className="join-img mx-auto my-2" />
          <p>Help students succeed</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default NewTutor;
