import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((res) => {
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
              <p>{review.title}</p>
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
