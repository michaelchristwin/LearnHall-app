import Footer from "../JSX/Footer";
import { useState } from "react";
import MyVerticallyCenteredModal from "../JSX/MyModal";
import ScrollToTop from "react-scroll-to-top";
import NavbarEx from "../JSX/NavbarEx";
import axios from "axios";

function Booking() {
  const [modalShow, setModalShow] = useState(false);

  const [sessiondata, setsessiondata] = useState({
    f1name:'',
    email:'',
    phone:'',
    why:''
  })

  console.log(sessiondata)

  function handleinputdata(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/employee/x/', sessiondata).then((response) => {
      console.log(response)
    }).catch(({message})=>{
      console.log(message)
    })
  }

  function handleinput(e){
    setsessiondata({...sessiondata, [e.target.name]: e.target.value})
  }

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
                className="d-form form-control d-block"
                name= "f1name"
                onChange={handleinput}
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
                name="email"
                onChange={handleinput}
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
              name="phone"
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
            type='submit'
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
