import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    axios
      .post("http://127.0.0.1:8000/employee/subscribex/", email)
      .then((response) => {
        console.log(response);
      })
      .catch(({ message }) => {
        console.log(message);
        setEmail("");
      });
  }
  const [email, setEmail] = useState("");
  return (
    <footer className="footer">
      <section className="flex justify-between my-container">
        <div className="footer-sect1">
          <div className="flex nav-brand2">
            <Image
              src={`/leaf.png`}
              alt="Learnhall Logo"
              className="logo-footer"
              width={30}
              height={30}
            />
            <Image
              src={`/nameblack.png`}
              alt="Brand Name"
              className="brand"
              height={30}
              width={100}
            />
          </div>
          <div className="mt-4 contact-sect ml-3 lg:ms-0 mx-auto">
            <div>
              <h4 className="social-title">Let`s Connect</h4>
              <div className="flex socials">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/learnhalltutoring"
                  className="mr-2"
                >
                  <Image
                    src={`/fb.png`}
                    alt="facebook"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="http://instagram.com/learnhalltutoring"
                  className="mr-2"
                >
                  <Image
                    src={`/ig.png`}
                    alt="instagram"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.twitter.com/learnhall"
                  className="mr-2"
                >
                  <Image
                    src={`/twtr.png`}
                    alt="Twitter"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:pt-3 mx-3 lg:mx-0">
              <h4 className="social-title">Contact Us</h4>
              <div className="flex socials">
                <Link href="tel:503-342-7214" className="me-2">
                  <Image
                    src={`/telephone.png`}
                    alt="telephone"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
                <Link href="mailto:info@learnhall.com" className="mr-2">
                  <Image
                    src={`/message.png`}
                    alt="email"
                    className="social"
                    height={45}
                    width={45}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-2 foot-links justify-around mr-8">
          <div className="text-white mr-4 block lg:mx-9">
            <h4 className="block f-head">About Us</h4>
            <Link href={`/faqs`} className="block">
              FAQs
            </Link>
            <Link
              target="_blank"
              href="http://blog.learnhall.com/"
              className="block"
            >
              Blog
            </Link>
            <span id="review-cont" className="block">
              Reviews
            </span>
          </div>
          <div className="text-white block mx-4 lg:mx-9">
            <h4 className="block f-head">Learn With Us</h4>
            <Link href={`/book-a-session`} className="d-block">
              Request a Tutor
            </Link>
          </div>
          <div className="text-white block mx-4 lg:mx-9">
            <h4 className="block f-head">Work With Us</h4>

            <Link href={`become-a-tutor`} className="block">
              Apply to Tutor
            </Link>
          </div>
        </div>
      </section>
      <form className="float-right" onSubmit={handleClick}>
        <p className="pt-2 newsletter">Subscribe to our free e-newsletter</p>
        <div className="flex">
          <input
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe rounded h-[40px] border ps-1 focus:bg-white focus:text-black"
            value={email}
          />
          <button className="rounded newsletter-btn ml-2" type="submit">
            Subscribe
          </button>
        </div>
      </form>
      <div className="footer-sectsm flex justify-between">
        <div className="flex mt-7 nav-brand2">
          <Image
            src={`/leaf.png`}
            alt="Learnhall Logo"
            className="logo-footer"
            width={25}
            height={25}
          />
          <Image
            src={`/nameblack.png`}
            alt="Brand Name"
            className="brand"
            height={25}
            width={100}
          />
        </div>
        <div className="mt-4 contact-sect flex justify-between">
          <div className="mr-2">
            <h4 className="social-title">Let`s Connect</h4>
            <div className="mt-2 block socials">
              <Link
                target="_blank"
                href="https://www.facebook.com/learnhalltutoring"
                className="mr-2"
              >
                <Image
                  src={`/fb.png`}
                  alt="facebook"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link
                target="_blank"
                href="http://instagram.com/learnhalltutoring"
                className="me-2"
              >
                <Image
                  src={`/ig.png`}
                  alt="instagram"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.twitter.com/learnhall"
                className="mr-2"
              >
                <Image
                  src={`/twtr.png`}
                  alt="Twitter"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
          <div className="lg:pt-3 lg:mx-0">
            <h4 className="social-title">Contact Us</h4>
            <div className="mt-2 block socials">
              <Link href="tel:503-342-7214" className="mr-2">
                <Image
                  src={`/telephone.png`}
                  alt="telephone"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
              <Link href="mailto:info@learnhall.com" className="mr-2">
                <Image
                  src={`/message.png`}
                  alt="email"
                  className="social"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="block copyright">
        <div className="text-white">
          <hr className="hr" />
          <p className="float-left cpr mt-4">
            Copyright 2016-2025 Learnhall LLC
          </p>
          <p className="float-right mt-4">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
