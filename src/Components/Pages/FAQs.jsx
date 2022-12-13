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
      <section className="mt-5 text-center">
        <h1 className="">Frequently Asked Questions</h1>
        <span className="text-center mx-auto d-block faq-t">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </span>
        <span className="text-center mx-auto d-block faq-t">
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </section>

      {FaqElement}
      <ScrollToTop smooth />
      <Footer />
    </main>
  );
}

export default Faqs;
