import Hero from "@/components/hero";
import Steps from "@/components/steps";
import Image from "next/image";
import LocalFont from "next/font/local";
import Reviews from "@/components/reviews";
import Link from "next/link";
import ReviewsSm from "@/components/review-sm";

const myFont = LocalFont({ src: "../fonts/AGaramondPro-Bold.otf" });

function Home() {
  return (
    <main className="overflow-hidden">
      <section id="top">
        <Image
          src={`/topEllipse.png`}
          alt="svg"
          className="draw1 lg:h-[130px] lg:w-[100px] h-[60px] w-[48px]"
          height={130}
          width={100}
        />
      </section>
      <Hero />
      <Steps />
      <section className="text-center r-sect">
        <div className="what-parent">
          <h1
            className={`${myFont.className} font-[500] lg:text-[2.375rem] text-[1.7rem]`}
          >
            What parents are saying
          </h1>
          <span className="block what-say">
            Read the reviews below to see what student`s parents are saying
            about
          </span>
          <span className="block what-say">
            Learnhall on Google for our tutoring services.
          </span>
          <span className="block what-say-sm">
            Read the reviews below to see what student`s
          </span>
          <span className="block what-say-sm">
            parents are saying about Learnhall on Google.
          </span>
        </div>
        <br />
        <div className="rv-sm">
          <ReviewsSm />
        </div>
        <div className="review-container block">
          <Reviews />
        </div>
      </section>
      <section className="tutor-sect">
        <Image
          src={`/subtract3.png`}
          alt="icon"
          className="sub-tut"
          height={150}
          width={30}
        />
        <div className="flex justify-between">
          <div className="tutor block px-2 px-lg-0">
            <h1
              className={`want-tut ${myFont.className} font-[500] text-[2.375rem]`}
            >
              Want to become a<br className="tut-break" />
              tutor with Learnhall?
            </h1>
            <h1
              className={`want-tut-sm ${myFont.className} font-[500] text-[1.7rem]`}
            >
              Want to become a tutor
              <br className="tut-break" />
              with Learnhall?
            </h1>
            <aside className="text-left">
              <span className="block why-lg">
                We hire tutors from a variety of backgrounds both in
              </span>
              <span className="block why-lg">
                the US and internationally. We pride ourselves on our
              </span>
              <span className="block why-lg">
                tutor onboarding process and high industy pay. Our
              </span>
              <span className="block why-lg">
                tutors work in-person and online, and we garner
              </span>
              <span className="block why-lg">
                regular inquiries for all academic and test prep
              </span>
              <span className="block why-lg">subjects at all age levels.</span>
              <br className="why-lg" />
              <span className="block why-sm">
                If you want to work with us, please click the button
              </span>
              <span className="block why-sm">
                below to fill out a short form and we will be in contact
              </span>
              <span className="block why-sm">
                within 24-48 hours for a prospective interview.
              </span>
            </aside>
            <Image
              src={`/books2.png`}
              alt="tutor"
              className="tutor-sm mt-2 mx-auto"
              width={272}
              height={100}
            />
            <Image
              src={"/semic.png"}
              alt="svg"
              className="float-right t-semi"
              height={85}
              width={50}
            />

            <Link href={`/become-a-tutor`}>
              <button className="become-btn mt-2 lg:mt-5 px-2 rounded">
                Become a Tutor
              </button>
            </Link>
          </div>
          <div className="me-4 tutor-images">
            <Image
              src={`/books2.png`}
              alt="Books"
              className="top-image"
              width={540}
              height={580}
            />
          </div>
        </div>
      </section>
      {/* <ScrollToTop smooth />
      <Footer /> */}
    </main>
  );
}

export default Home;
