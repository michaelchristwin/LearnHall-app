import Expand from "../img/expand.png";
import Shrink from "../img/shrink.png";

function FaqSnip(props) {
  const after =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est l";

  return (
    <div className="d-flex mx-auto my-3">
      <div
        className="border-0 shadow mx-auto p-4 rounded"
        style={{ width: "800px" }}
      >
        <span className="justify-content-center">
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing eli?</b>
          <img
            id={props.id}
            src={props.show ? Shrink : Expand}
            alt="expand"
            onClick={props.onClick}
            className="px-1 float-end"
          />
        </span>

        <br />
        <span>{props.show ? after : ""}</span>
      </div>
    </div>
  );
}

export default FaqSnip;
