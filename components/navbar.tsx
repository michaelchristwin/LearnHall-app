import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="bg-white fixed top-0 py-4 w-full z-10">
        <ul className="flex space-x-4">
          <li>
            <div>
              <div className="nav-b">
                <span className="flex nav-brand">
                  <Image
                    src={`/leaf.png`}
                    alt="Learnhall Logo"
                    className="mr-1 logo"
                    height={30}
                    width={30}
                  />
                  <Image
                    src={`/Group.png`}
                    alt="Learnhall"
                    className="brand"
                    height={30}
                    width={130}
                  />
                </span>
              </div>
            </div>
          </li>
          <li className="lg:!ml-[300px]">
            <Link href={`/`} className="nav-link">
              Home
            </Link>
          </li>
          <li className="ml-4">
            <Link href={`/`} className="nav-link">
              Book a Session
            </Link>
          </li>
          <li className="ml-4">
            <Link href={`/`} className="nav-link">
              Become a Tutor
            </Link>
          </li>
          <li className="ml-4">
            <Link href="http://blog.learnhall.com/" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="ml-4">
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
      </nav>
    </div>
  );
}

export default Navbar;
