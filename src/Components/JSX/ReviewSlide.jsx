import ReviewData from "../JSX/ReviewData";
import Carousel from "react-bootstrap/Carousel";
import Reviews from "../JSX/Reviews";
import "../CSS/styles.css";

function ReviewSlide() {
  const ReviewElement1 = ReviewData[0].map((data) => {
    return (
      <Reviews
        name={data.name}
        review={data.review}
        key={data.name}
        img={data.img}
      />
    );
  });
  const ReviewElement2 = ReviewData[1].map((data) => {
    return (
      <Reviews
        name={data.name}
        review={data.review}
        key={data.name}
        img={data.img}
      />
    );
  });
  return (
    <main className="overflow-scroll">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center">{ReviewElement1}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">{ReviewElement2}</div>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default ReviewSlide;
