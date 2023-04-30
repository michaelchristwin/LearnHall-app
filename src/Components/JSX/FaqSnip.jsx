import Expand from "../img/expand.png";
import Shrink from "../img/shrink.png";
import { useState } from "react";

function FaqSnip(props) {
  const [show, SetShow] = useState(false);
  const handleClick = () => {
    SetShow((prevState) => !prevState);
  };
  return (
    <div className="d-flex mx-auto my-3">
      <div
        className="border-0 shadow mx-auto p-4 rounded"
        style={{ width: "800px" }}
      >
        <span className="justify-content-center">
          <b>{props.title}</b>
          <img
            id={props.id}
            src={show ? Shrink : Expand}
            alt="expand"
            onClick={handleClick}
            className="px-1 float-end"
          />
        </span>

        <br />
        <span>{show && props.content}</span>
      </div>
    </div>
  );
}

export default FaqSnip;
