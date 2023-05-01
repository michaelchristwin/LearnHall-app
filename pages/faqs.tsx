import FaqData from "@/components/faqdata";
import Image from "next/image";
import { useState } from "react";

function Faq({ faq }: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="border-0 shadow mx-auto lg:p-4 px-[0.43rem] py-2 mb-3 rounded lg:w-[800px] w-[90%]">
      <div className="flex ">
        <b className="float-left">{faq.title}</b>
      </div>
      <Image
        src={show ? "/shrink.png" : "/expand.png"}
        alt="Button"
        width={50}
        height={50}
        onClick={handleClick}
        className="float-right align-middle mt-[-20px] lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]"
      />
      <br />
      {show && <span>{faq.content}</span>}
    </div>
  );
}

function Faqs() {
  return (
    <div className="mt-[100px]">
      {FaqData.map((faq) => (
        <Faq key={faq.title} faq={faq} />
      ))}
    </div>
  );
}

export default Faqs;
