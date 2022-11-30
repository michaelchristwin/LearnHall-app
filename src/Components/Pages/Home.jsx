import Leaf from "../img/Vector.png";
import Ellipse from "../img/Ellipse.png";
import Name from "../img/Group.png";
import "../CSS/styles.css";

function Home() {
  return (
    <main>
      <section>
        <img src={Ellipse} alt="ellipse" />
        <span className="d-flex">
          <img src={Leaf} alt="Learnhall Logo" className="logo" />
          <img src={Name} alt="Brand Name" className="brand" />
        </span>
      </section>
    </main>
  );
}

export default Home;
