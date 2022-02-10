import { useEffect, useState } from "react";
import { patchReviewVotes } from "../utils/api";
import Button from "react-bootstrap/Button";

const ReviewVotes = ({ review }) => {
  const [votes, setVotes] = useState();

  useEffect(() => {
    setVotes(review.votes);
  }, [review]);

  return (
    <>
      <Button
        size="sm"
        onClick={() => {
          setVotes(++review.votes);
          patchReviewVotes(review.review_id, 1);
        }}
      >
        ↑
      </Button>
      <p className="text-center">{votes} Votes</p>
      <Button
        size="sm"
        onClick={() => {
          setVotes(--review.votes);
          patchReviewVotes(review.review_id, -1);
        }}
      >
        ↓
      </Button>
    </>
  );
};

export default ReviewVotes;
