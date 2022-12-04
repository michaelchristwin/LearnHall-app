import NavBar from "../JSX/NavBar";
import Expand from "../img/expand.png";
import Shrink from "../img/shrink.png";
import { useState } from "react";

function Faqs() {
  const after =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est l";
  const [show, SetShow] = useState(false);

  return (
    <main>
      <NavBar />
      <section className="d-flex">
        <h1 className="mx-auto">Frequently Asked Questions</h1>
      </section>
      <div className="d-flex mx-auto" style={{ width: "700px" }}>
        <div className="border-0 shadow mx-auto p-4 rounded">
          <span className="justify-content-center">
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing eli?</b>
            <img
              src={show ? Shrink : Expand}
              alt="expand"
              onClick={() => SetShow(show ? false : true)}
              className="px-1 float-end"
            />
          </span>

          <br />
          <span>{show ? after : ""}</span>
        </div>
      </div>
    </main>
  );
}

export default Faqs;
