import axios from "axios";
import { useState } from "react";
import LocalFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const myFont = LocalFont({ src: "../fonts/AGaramondPro-Bold.otf" });
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

  const handleinputdata = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsessionerror(validate(sessiondata));
    axios
      .post("http://127.0.0.1:8000/employee/x/", sessiondata)
      .then(() => {
        setsessiondata({ username: "", email: "", phone: "", why: "" });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };
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
          className="p-11 shadow my-form border rounded block"
          onSubmit={handleinputdata}
        >
          <h3 className={`font-[500] text-[1.7rem] ${myFont.className}`}>
            Book a Session
          </h3>
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
                type="text"
                className="block border rounded border-[#b4b2b2] h-[36px] pl-2 w-[320px] lg:w-[400px]"
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
                type="email"
                id="email"
                className="block border rounded border-[#b4b2b2] h-[36px] w-[320px] lg:w-[400px] pl-2"
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
              className="block border rounded border-[#b4b2b2] h-[36px] w-[320px] lg:w-[400px] pl-2"
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
            className="border rounded border-[#b4b2b2] lg:w-[400px] w-[320px] pl-2"
            rows={8}
            name="why"
            onChange={handleinput}
          ></textarea>
          <button className="rounded py-1 sub-btn px-4" type="submit">
            Submit
          </button>
        </form>
        <div className="w-[355px] h-[330px] border shadow ml-[9%] lg:block hidden">
          <h1
            className={`text-center mt-[30px] ${myFont.className} text-[25px] font-[500]`}
          >
            Get In Touch
          </h1>
          <span className="text-center block">
            You can also contact us with any
          </span>
          <span className="text-center block">
            questions via phone or email.
          </span>
          <Link href={`tel:503-342-7214`}>
            <div className="bg-[#EDEEF2] w-[255px] h-[50px] flex mx-auto mt-[40px] rounded">
              <Image
                src={"/phone.png"}
                width={20}
                height={10}
                alt="phone"
                className="block w-[20px] !h-[20px] my-auto ml-6"
              />
              <span className="block my-auto ml-6 text-[18px] font-[400]">
                503-342-7214
              </span>
            </div>
          </Link>
          <Link href={`mailto:info@learnhall.com`}>
            <div className="bg-[#EDEEF2] w-[255px] h-[50px] flex mx-auto mt-[10px] rounded">
              <Image
                src={"/mail.png"}
                width={20}
                height={10}
                alt="phone"
                className="block w-[20px] !h-[15px] my-auto ml-6"
              />
              <span className="block my-auto ml-6 text-[18px] font-[400]">
                info@learnhall.com
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BookASession;
