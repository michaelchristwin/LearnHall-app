import Image from "next/image";
import LocalFont from "next/font/local";

const myFont = LocalFont({ src: "../fonts/AGaramondPro-Bold.otf" });

function Steps() {
  return (
    <section className="py-5">
      <div className="flex">
        <aside className="pt-3 block booking mx-auto w-full">
          <h1
            className={`booking-text ${myFont.className} font-[500] text-[2.375rem]`}
          >
            How our service works
          </h1>
          <p className="book-p">
            Follow the three steps below to book your first session and get
            started with a tutor.
          </p>
          <span id="follow">Follow the three steps below to book your</span>
          <span id="follow">first session and get started with a tutor.</span>
        </aside>
        <div>
          <Image
            src={`/subtract.png`}
            alt="ellipse"
            className="subtract float-right lg:block hidden"
            height={130}
            width={50}
          />
        </div>
      </div>
      <aside className="flex step-sect">
        <div className="relative">
          <div className="student2">
            <Image
              src={`/tep.jpg`}
              alt="Student with book"
              className="lg:w-[600px] lg:h-[500px] lg:rounded-[12px] lg:block hidden border-[#b74b40] border-[3px] ml-8"
              width={600}
              height={550}
            />
          </div>
        </div>
        <div className="all-steps">
          <div className="flex flex-row mx-1 ">
            <Image
              src={`/one.png`}
              alt="One"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
              height={90}
              width={90}
            />
            <Image
              src={`/line.png`}
              alt="line"
              className="line"
              height={100}
              width={2}
            />
            <div className="border shadow text-box text-left step justify-center">
              <h3 className="step-title">Step One</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>Inquire about our tutoring services by filling-out</span>
                <span>and submitting the “Book a Session” form.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <Image
              src={`/two.png`}
              alt="Two"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
              height={90}
              width={90}
            />
            <div className="border shadow text-box p-2 step">
              <h3 className="step-title">Step Two</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>Within 24 hours an advisor will contact you to go</span>
                <span>over the student`s tutoring goals & needs.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <Image
              src={`/three.png`}
              alt="Three"
              className="num-fig lg:h-[90px] lg:w-[90px] w-[50px] h-[50px]"
              height={90}
              width={90}
            />
            <div className="border shadow text-box p-2 step">
              <h3 className="step-title">Step Three</h3>
              <div className="lg:px-4 px-2 flex flex-col d-step">
                <span>The advisor will find an ideal tutor match and set</span>
                <span>
                  up a free session to ensure he/she is the right fit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="empty-sm">
        <Image
          src={`/studh-sm.png`}
          alt="Student with book"
          className="mx-auto studh"
          width={222}
          height={227}
        />
        <Image
          src={`/near-sm.png`}
          alt="svg"
          className="svg-sm"
          height={86}
          width={46}
        />
      </div>
    </section>
  );
}

export default Steps;
