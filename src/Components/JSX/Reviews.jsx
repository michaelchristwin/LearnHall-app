import "../CSS/styles.css";

function Reviews(props) {
  return (
    <main className="reviews-sect">
      <div className="p-3 shadow border-0 review rounded">
        <div className="d-flex">
          <img src={props.img} alt="Avatar" className="avatar" />
          <h3>{props.name}</h3>
        </div>
        <p>{props.review}</p>
      </div>
    </main>
  );
}

export default Reviews;
