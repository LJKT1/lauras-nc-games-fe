import { useEffect, useState } from "react";
import { patchReviewVotes } from "../utils/api";
import { Button, Card } from "react-bootstrap";

const ReviewVotes = ({ review }) => {
  const [votes, setVotes] = useState();
  const [err, setErr] = useState(null);
  useEffect(() => {
    setVotes(review.votes);
  }, [review]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{votes} Votes</Card.Title>
          <Button
            size="lg"
            onClick={() => {
              setVotes(++review.votes);
              setErr(null);
              patchReviewVotes(review.review_id, 1).catch((err) => {
                setVotes(--review.votes);
                setErr("Something went wrong, please try again");
              });
            }}
          >
            Upvote 👍
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setVotes(--review.votes);
              setErr(null);
              patchReviewVotes(review.review_id, -1).catch((err) => {
                setVotes(++review.votes);
                setErr("Something went wrong, please try again");
              });
            }}
          >
            Downvote 👎
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReviewVotes;
