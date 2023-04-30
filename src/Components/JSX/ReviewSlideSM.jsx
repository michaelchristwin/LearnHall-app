import { Carousel } from "react-bootstrap";

import { ReviewDataSM } from "./ReviewData";
import Reviews from "./Reviews";

function ReviewSlideSM() {
  const ReviewEmt = ReviewDataSM.map((data) => {
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
    <main>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center">{ReviewEmt[0]}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">{ReviewEmt[1]}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">{ReviewEmt[2]}</div>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default ReviewSlideSM;
