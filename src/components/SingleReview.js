import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { UserContext } from "../contexts/UserContext";
import { getSingleReview, patchReviewVotes } from "../utils/api";
import ReviewComments from "./ReviewComments";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((res) => {
      setReview(res);
    });
  }, [review_id]);

  let newVotes = 0;
  return (
    <Container fluid="md">
      <Card style={{ width: "18rem" }}>
        <Card.Title>{review.title}</Card.Title>
        <Card.Subtitle>{review.category}</Card.Subtitle>
        <Card.Text>Designer: {review.designer}</Card.Text>
        <Card.Img
          variant="top"
          src={review.review_img_url}
          alt={review.title}
        />
        <Card.Text>{review.review_body}</Card.Text>
        <Card.Text>By: {review.owner}</Card.Text>
        <Card.Text>Created at: {review.created_at} </Card.Text>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{review.comment_count} Comments</Accordion.Header>
            <Accordion.Body>
              {review.review_id && (
                <ReviewComments review_id={review.review_id} />
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button size="sm" onClick={() => patchReviewVotes(review.review_id, 1)}>
          ↑
        </Button>
        <Card.Text className="text-center">{review.votes} Votes</Card.Text>
        <Button
          size="sm"
          onClick={() => patchReviewVotes(review.review_id, -1)}
        >
          ↓
        </Button>
      </Card>
    </Container>
  );
};

export default SingleReview;
