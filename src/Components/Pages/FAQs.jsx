import NavBar from "../JSX/NavBar";
import Footer from "../JSX/Footer";
import FaqSnip from "../JSX/FaqSnip";
import FaqData from "../JSX/FaqData";

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
