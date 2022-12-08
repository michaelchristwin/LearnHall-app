import "../CSS/styles.css";
import FiveStar from "../img/5star.png";

function Reviews(props) {
  return (
    <main className="reviews-sect">
      <div className="shadow border-0 review rounded">
        <div className="d-flex mx-auto">
          <img src={props.img} alt="Avatar" className="avatar" />
          <div>
            <h3>{props.name}</h3>
            <img src={FiveStar} alt="rating" style={{ height: "30px" }} />
          </div>
        </div>
        <p className="d-review">{props.review}</p>
      </div>
    </main>
  );
}

export default Reviews;
