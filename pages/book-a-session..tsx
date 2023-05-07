import axios from "axios";
import { useState, useEffect } from "react";

interface Data {
  username: string;
  email: string;
  phone: string;
  why: string;
}

function BookASession() {
  const [sessiondata, setsessiondata] = useState<Data>({
    username: "",
    email: "",
    phone: "",
    why: "",
  });
  const [sessionerror, setsessionerror] = useState<Partial<Data>>({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleinputdata = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsessionerror(validate(sessiondata));
    setisSubmit(true);
    axios
      .post("http://127.0.0.1:8000/employee/x/", sessiondata)
      .then((response) => {
        console.log(response);
        setsessiondata({ username: "", email: "", phone: "", why: "" });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  // useEffect(() => {
  //   console.log(sessionerror);
  //   if (
  //     typeof sessionerror === "object" &&
  //     sessionerror !== null &&
  //     Object.keys(sessionerror).length === 0 &&
  //     isSubmit
  //   ) {
  //     // console.log(sessiondata);
  //     //   setModalShow(true);
  //   }
  // }, [sessionerror, isSubmit]);

  const handleinput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setsessiondata({ ...sessiondata, [e.target.name]: e.target.value });
  };
  const validate = (values: Data) => {
    const errors: Partial<Data> = {};
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
    }
    return errors;
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    const isValidKey = /[0-9]/.test(e.key) || allowedKeys.includes(e.key);

    if (!isValidKey) {
      e.preventDefault();
    }
  };

  return (
    <main className="mt-[50px]">
      <section className="flex py-3 form-parent">
        <form
          className="p-11 shadow my-form rounded block"
          onSubmit={handleinputdata}
        >
          <h3 className="font-[500] text-[1.7rem]">Book a Session</h3>
          <div className="block">
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
          <div className="mt-4 mx-auto">
            <fieldset className="mx-auto">
              <p className="form-error">
                {typeof sessionerror === "object" &&
                sessionerror !== null &&
                Object.keys(sessionerror).length !== 0
                  ? sessionerror.username
                  : ""}
              </p>
              <label htmlFor="lname" className="block">
                Name*
              </label>
              <input
                required
                type="text"
                className="d-form block border rounded border-black h-[36px] pl-2"
                name="username"
                onChange={handleinput}
              />
            </fieldset>
            <fieldset className="mx-auto pt-3">
              <p className="form-error">
                {typeof sessionerror === "object" &&
                sessionerror !== null &&
                Object.keys(sessionerror).length !== 0
                  ? sessionerror.email
                  : ""}
              </p>
              <label htmlFor="email" className="block">
                Email*
              </label>
              <input
                required
                type="email"
                id="email"
                className="d-form block border rounded border-black h-[36px] pl-2"
                name="email"
                onChange={handleinput}
              />
            </fieldset>
          </div>
          <fieldset className="mx-auto pt-3">
            <p className="form-error">
              {typeof sessionerror === "object" &&
              sessionerror !== null &&
              Object.keys(sessionerror).length !== 0
                ? sessionerror.phone
                : ""}
            </p>
            <label htmlFor="phone" className="block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={12}
              className="d-form block border rounded border-black h-[36px] pl-2"
              name="phone"
              onKeyDown={keyPress}
              onChange={handleinput}
            />
          </fieldset>

          <label htmlFor="textarea" className="ml-2 block mt-5">
            Why does the student need tutoring?
          </label>
          <textarea
            id="textarea"
            className="border rounded border-black lg:w-[400px] w-[320px] pl-2"
            rows={8}
            name="why"
            onChange={handleinput}
          ></textarea>
          <button className="rounded py-1 sub-btn px-4" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default BookASession;
