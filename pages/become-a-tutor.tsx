import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LocalFont from "next/font/local";

interface Data {
  username: string;
  email: string;
  phone: string;
  tell: string;
}

const myFont = LocalFont({ src: "../fonts/AGaramondPro-Bold.otf" });

function BecomeATutor() {
  const [sessiondata, setsessiondata] = useState<Data>({
    username: "",
    email: "",
    phone: "",
    tell: "",
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
        setsessiondata({ username: "", email: "", phone: "", tell: "" });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  useEffect(() => {
    console.log(sessionerror);
    if (
      typeof sessionerror === "object" &&
      sessionerror !== null &&
      Object.keys(sessionerror).length === 0 &&
      isSubmit
    ) {
      //   console.log(sessiondata);
      //   setModalShow(true);
    }
  }, [sessionerror, isSubmit]);

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
    <main>
      <section className="flex form-parent pt-[50px]">
        <form
          className="p-11 shadow my-form rounded"
          onSubmit={handleinputdata}
        >
          <h3 className="font-[500] text-[1.7rem]">Become a Tutor</h3>
          <div className="block">
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

          <fieldset className="mx-auto pt-3">
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
              id="lname"
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
              type="email"
              id="email"
              name="email"
              className="d-form block border rounded border-black h-[36px] pl-2"
              onChange={handleinput}
            />
          </fieldset>

          <fieldset className="mx-auto pt-3">
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
              className="d-form block border rounded border-black h-[36px] pl-2"
              onKeyDown={keyPress}
              onChange={handleinput}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="textarea1" className="block mt-5">
              Tell us about yourself?
            </label>
            <textarea
              name="tell"
              id="textarea1"
              className="border border-black rounded lg:w-[366px] w-[330px]"
              rows={8}
              onChange={handleinput}
            ></textarea>
          </fieldset>
          <button className="rounded sub-btn py-1 px-4" type="submit">
            Submit
          </button>
        </form>
        <div className="p-4 why-join block text-center w-[252px] shadow">
          <h4 className={`${myFont.className} text-[1.40rem]`}>Why Join Us?</h4>
          <span className="block">Make Money While Making a</span>
          <span className="block">Difference in Students Lives</span>
          <Image
            src={`/dollar.png`}
            alt="dollar"
            className="join-img mx-auto mt-3 block"
            width={50}
            height={50}
          />
          <p className="my-4 block">Earn a Steady Income</p>
          <hr className="join-hr mx-auto block" />
          <Image
            src={`/work.png`}
            alt="work"
            className="join-img mx-auto my-2"
            width={50}
            height={50}
          />
          <p className="my-4 block">Work from Anywhere</p>
          <hr className="join-hr mx-auto" />
          <Image
            src={`/scholar.png`}
            alt="scholar"
            className="join-img mx-auto my-2"
            width={50}
            height={50}
          />
          <p>Help students Succeed</p>
        </div>
      </section>
    </main>
  );
}

export default BecomeATutor;
