import NavBar from "../JSX/NavBar";

import { useState } from "react";
import FaqSnip from "../JSX/FaqSnip";

function Faqs() {
  const [show, SetShow] = useState(false);
  const nums = [1, 2, 3, 4];
  const FaqElement = nums.map((num) => {
    return (
      <FaqSnip
        id={num}
        onClick={() => SetShow(show ? false : true)}
        show={show}
      />
    );
  });

  return (
    <main>
      <NavBar />
      <section className="d-flex">
        <h1 className="mx-auto">Frequently Asked Questions</h1>
      </section>
      {FaqElement}
    </main>
  );
}

export default Faqs;
