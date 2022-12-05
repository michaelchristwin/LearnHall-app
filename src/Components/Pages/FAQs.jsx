import NavBar from "../JSX/NavBar";
import Footer from "../JSX/Footer";
import { useState } from "react";
import FaqSnip from "../JSX/FaqSnip";
import { nanoid } from "nanoid";

function Faqs() {
  const [show, SetShow] = useState(false);
  const nums = [1, 2, 3, 4];
  function handleClick() {
    SetShow(show ? false : true);
  }
  const FaqElement = nums.map((num) => {
    return (
      <FaqSnip key={nanoid()} id={nanoid()} onClick={handleClick} show={show} />
    );
  });

  return (
    <main>
      <NavBar />
      <section className="d-flex">
        <h1 className="mx-auto">Frequently Asked Questions</h1>
      </section>
      {FaqElement}
      <Footer />
    </main>
  );
}

export default Faqs;
