import { getReviews } from "../utils/api";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((res) => {
      console.log(res);
      setReviews(res);
    });
  }, []);
  return (
    <main className="Reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
              <p>Category: {review.category}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p>By: {review.owner}</p>
              <p>Votes: {review.votes}</p>
              <p>Comments: {review.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
