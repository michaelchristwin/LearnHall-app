import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    let currentLink = router.pathname.substring(1);
    setActiveLink(currentLink);
    setIsOpen(false);
  }, [router]);

  return (
    <div>
      <nav className="bg-white fixed top-0 lg:py-4 py-3 w-full z-10 lg:flex block lg:justify-between">
        <div className="nav-b">
          <Link href={"/"}>
            <span className="flex">
              <Image
                src={`/leaf.png`}
                alt="Learnhall Logo"
                className="mx-1 logo lg:h-[30px] lg:w-[30px] w-[20px] h-[20px]"
                height={30}
                width={30}
              />
              <Image
                src={`/Group.png`}
                alt="Learnhall"
                className="brand lg:h-[30px] lg:w-[130px] h-[20px] w-[90px]"
                height={30}
                width={130}
              />
            </span>
          </Link>
        </div>
        <ul className="lg:flex block space-x-4 lg:mr-8">
          <li
            className={`lg:block hidden hover:text-black ${
              activeLink === "" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/`} className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={`ml-4 lg:block hidden  hover:text-black ${
              activeLink === "book-a-session" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/book-a-session`} className="nav-link">
              Book a Session
            </Link>
          </li>
          <li
            className={`ml-4 lg:block hidden hover:text-black ${
              activeLink === "become-a-tutor" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/become-a-tutor`} className="nav-link">
              Become a Tutor
            </Link>
          </li>
          <li
            className={`lg:block hidden ml-4 active:text-black text-[#a1a1a1] hover:text-black`}
          >
            <Link
              target="_blank"
              href="http://blog.learnhall.com/"
              className="nav-link"
            >
              Blog
            </Link>
          </li>
          <li className="ml-4 lg:block hidden">
            <Link href="tel:503-342-721">
              <Image
                src={`/tele.png`}
                alt="telephone"
                className="tele"
                height={20}
                width={150}
              />
            </Link>
          </li>
        </ul>
        <button
          className="p-1 border rounded shadow lg:hidden block absolute left-[85%] top-[3px]"
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <title>Close</title>
              <path d="M19.293 4.707a1 1 0 0 0-1.414 0L12 10.586 6.121 4.707a1 1 0 1 0-1.414 1.414L10.586 12l-5.879 5.879a1 1 0 1 0 1.414 1.414L12 13.414l5.879 5.879a1 1 0 0 0 1.414-1.414L13.414 12l5.879-5.879a1 1 0 0 0 0-1.414z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </button>
        <ul
          className={
            isOpen ? "flex justify-around lg:hidden mt-[20px]" : "hidden"
          }
        >
          <li
            className={`block lg:hidden hover:text-black ${
              activeLink === "home" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/`} className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={`block lg:hidden hover:text-black ${
              activeLink === "book-a-session" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/book-a-session`} className="nav-link">
              Book a Session
            </Link>
          </li>
          <li
            className={`block lg:hidden hover:text-black ${
              activeLink === "become-a-tutor" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link href={`/become-a-tutor`} className="nav-link">
              Become a Tutor
            </Link>
          </li>
          <li
            className={`block lg:hidden hover:text-black ${
              activeLink === "blog" ? "text-black" : "text-[#a1a1a1]"
            }`}
          >
            <Link
              target="_blank"
              href="http://blog.learnhall.com/"
              className="nav-link"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
