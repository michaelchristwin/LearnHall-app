import "../CSS/styles.css";
import FiveStar from "../img/5star.png";

function Reviews(props) {
  return (
    <main className="reviews-sect" id="my-review">
      <div className="shadow border-0 review rounded">
        <div className="d-flex mx-auto">
          <img src={props.img} alt="Avatar" className="avatar" />
          <div>
            <h3 className="r-name">{props.name}</h3>
            <img src={FiveStar} alt="rating" className="star" />
          </div>
        </div>
        <p className="d-review">{props.review}</p>
      </div>
    </main>
  );
}

export default Reviews;
