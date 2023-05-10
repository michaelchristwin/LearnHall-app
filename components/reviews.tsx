import { useState } from "react";
import ReviewData from "./reviewdata";
import Image from "next/image";

function Reviews() {
  const firstThree = ReviewData.slice(0, 3);
  const lastThree = ReviewData.slice(-3);
  const [view, setView] = useState(firstThree);
  return (
    <div>
      <section className="reviews-sect flex justify-center">
        {view.map((review) => {
          return (
            <div
              className="shadow border review rounded-[15px] ml-4 hover:translate-y-[-5px] hover:translate-x-[-5px] bg-white"
              key={review.name}
            >
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
          );
        })}
      </section>
      <span className="flex justify-center">
        <button
          className={`w-4 h-4  active:bg-orange-400 bg-white mr-1 rounded-[50%] border border-black hover:bg-[#b84b40]`}
          onClick={() => setView(firstThree)}
        ></button>
        <button
          className={`w-4 h-4 active:bg-orange-400 hover:bg-[#b84b40] bg-white rounded-[50%] border-black border`}
          onClick={() => setView(lastThree)}
        ></button>
      </span>
    </div>
  );
}

export default Reviews;
