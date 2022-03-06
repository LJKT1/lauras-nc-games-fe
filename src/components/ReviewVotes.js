import { useEffect, useState } from "react";
import { patchReviewVotes } from "../utils/api";
import { Button, Card, ButtonGroup } from "react-bootstrap";

const ReviewVotes = ({ review }) => {
  const [votes, setVotes] = useState();
  const [hasVoted, setHasVoted] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setVotes(review.votes);
  }, [review]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header className="text-center">
            <Card.Title>Votes: {votes}</Card.Title>
            <ButtonGroup className="d-grid gap-2">
              {hasVoted && <Card.Text className="m-2">VOTE COUNTED</Card.Text>}
              <Button
                disabled={hasVoted}
                onClick={() => {
                  setVotes(++review.votes);
                  setHasVoted(true);
                  setErr(null);
                  patchReviewVotes(review.review_id, 1).catch((err) => {
                    setVotes(--review.votes);
                    setErr("Something went wrong, please try again");
                  });
                }}
              >
                👍
              </Button>
              <Button
                disabled={hasVoted}
                onClick={() => {
                  setVotes(--review.votes);
                  setHasVoted(true);
                  setErr(null);
                  patchReviewVotes(review.review_id, -1).catch((err) => {
                    setVotes(++review.votes);
                    setErr("Something went wrong, please try again");
                  });
                }}
              >
                👎
              </Button>
            </ButtonGroup>
          </Card.Header>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReviewVotes;
