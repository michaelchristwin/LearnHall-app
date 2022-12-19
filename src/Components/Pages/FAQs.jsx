import Footer from "../JSX/Footer";
import FaqSnip from "../JSX/FaqSnip";
import FaqData from "../JSX/FaqData";
import NavbarEx from "../JSX/NavbarEx";
import ScrollToTop from "react-scroll-to-top";

function Faqs() {
  const FaqElement = FaqData.map((data) => {
    return (
      <FaqSnip
        key={data.id}
        id={data.id}
        content={data.content}
        title={data.title}
      />
    );
  });
  return (
    <main>
      <NavbarEx />
      <section className="mt-5 text-center mb-4">
        <h1 className="">Frequently Asked Questions</h1>
        <span>
          Below you'll find answers to the questions we get asked the most about
          on our platform.
        </span>
      </section>
      {FaqElement}
      <ScrollToTop smooth />
      <Footer />
    </main>
  );
}

export default Faqs;
