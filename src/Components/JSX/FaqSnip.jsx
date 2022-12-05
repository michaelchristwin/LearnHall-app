import Expand from "../img/expand.png";
import Shrink from "../img/shrink.png";

function FaqSnip(props) {
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
            src={props.show ? Shrink : Expand}
            alt="expand"
            onClick={props.onClick}
            className="px-1 float-end"
          />
        </span>

        <br />
        <span>{props.isOpen && props.content}</span>
      </div>
    </div>
  );
}

export default FaqSnip;
