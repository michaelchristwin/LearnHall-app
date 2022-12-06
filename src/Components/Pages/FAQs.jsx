import Footer from "../JSX/Footer";
import FaqSnip from "../JSX/FaqSnip";
import FaqData from "../JSX/FaqData";
import NavbarEx from "../JSX/NavbarEx";

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
      <section className="d-flex">
        <h1 className="mx-auto">Frequently Asked Questions</h1>
      </section>
      {FaqElement}
      <Footer />
    </main>
  );
}

export default Faqs;
