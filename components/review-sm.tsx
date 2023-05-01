import { useState } from "react";
import ReviewData from "./reviewdata";
import Image from "next/image";

function ReviewsSm() {
  const [view, setView] = useState(0);
  const next = () => {
    if (view >= 0 && view < ReviewData.length - 1) {
      setView((prevView) => prevView + 1);
    }
  };

  console.log(ReviewData.length);
  const prev = () => {
    if (view > 0) {
      setView((prevView) => prevView - 1);
    }
  };

  const review = ReviewData[view];
  return (
    <div>
      <section className="reviews-sect flex justify-center">
        <div className="shadow border-0 review rounded ml-4" key={review.name}>
          <div className="flex">
            <Image
              src={review.img}
              alt="Avatar"
              className="avatar"
              height={50}
              width={70}
            />
            <div>
              <h3 className="r-name">{review.name}</h3>
              <Image
                src={`/5star.png`}
                alt="rating"
                className="star"
                height={25}
                width={100}
              />
            </div>
          </div>
          <p className="d-review mt-4">{review.review}</p>
        </div>
      </section>
      <span className="flex justify-center">
        <button
          className="w-2 h-2 active:bg-orange-400 bg-white mr-1 rounded-[50%] border border-black hover:bg-[#b84b40]"
          onClick={() => prev()}
        ></button>
        <button
          className="w-2 h-2 active:bg-orange-400 hover:bg-[#b84b40] bg-white rounded-[50%] border-black border"
          onClick={() => next()}
        ></button>
      </span>
    </div>
  );
}

export default ReviewsSm;
