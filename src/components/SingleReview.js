import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { getSingleReview } from "../utils/api";
import ReviewComments from "./ReviewComments";
import ReviewVotes from "./ReviewVotes";
import { titleCase } from "../utils/textFormatting";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((res) => {
      setReview(res);
    });
  }, [review_id]);

  return (
    <Container fluid="md">
      <Card style={{ width: "18rem" }}>
        <Card.Title className="m-2">{review.title}</Card.Title>
        <Card.Subtitle className="m-1">
          Category: {review.category && titleCase(review.category)}
        </Card.Subtitle>
        <Card.Text className="m-1">Designer: {review.designer}</Card.Text>
        <Card.Img
          variant="top"
          src={review.review_img_url}
          alt={review.title}
        />
        <Card.Body>{review.review_body}</Card.Body>
        <Card.Text className="m-1">By: {review.owner}</Card.Text>
        <Card.Text className="m-1">
          Created at: {new Date(review.created_at).toLocaleDateString()}
        </Card.Text>
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
        <ReviewVotes review={review} />
      </Card>
    </Container>
  );
};

export default SingleReview;
