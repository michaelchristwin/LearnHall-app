import "../CSS/styles.css";

function Reviews(props) {
  return (
    <main className="reviews-sect">
      <div className="p-3 shadow border-0 review">
        <h1>{props.name}</h1>
        <p>{props.review}</p>
      </div>
    </main>
  );
}

export default Reviews;
