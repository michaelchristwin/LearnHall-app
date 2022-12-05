import NavBar from "../JSX/NavBar";
import Footer from "../JSX/Footer";
import { useState } from "react";
import FaqSnip from "../JSX/FaqSnip";
import FaqData from "../JSX/FaqData";

function Faqs() {
  const [show, SetShow] = useState(false);

  const handleClick = () => {
    SetShow((prevState) => !prevState);
  };
  const FaqElement = FaqData.map((data) => {
    return (
      <FaqSnip
        key={data.id}
        id={data.id}
        content={data.content}
        title={data.title}
        onClick={handleClick}
        isOpen={show}
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
      <Footer />
    </main>
  );
}

export default Faqs;
