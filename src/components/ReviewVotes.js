import { useEffect, useState } from "react";
import { patchReviewVotes } from "../utils/api";
import Button from "react-bootstrap/Button";

const ReviewVotes = ({ review }) => {
  const [votes, setVotes] = useState();
  const [err, setErr] = useState(null);
  useEffect(() => {
    setVotes(review.votes);
  }, [review]);

  return (
    <>
      <Button
        onClick={() => {
          setVotes(++review.votes);
          setErr(null);
          patchReviewVotes(review.review_id, 1).catch((err) => {
            setVotes(--review.votes);
            setErr("Something went wrong, please try again");
          });
        }}
      >
        ↑
      </Button>
      <p className="text-center">{votes} Votes</p>
      <Button
        onClick={() => {
          setVotes(--review.votes);
          setErr(null);
          patchReviewVotes(review.review_id, -1).catch((err) => {
            setVotes(++review.votes);
            setErr("Something went wrong, please try again");
          });
        }}
      >
        ↓
      </Button>
    </>
  );
};

export default ReviewVotes;
