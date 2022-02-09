import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { getSingleReview } from "../utils/api";
import ReviewComments from "./ReviewComments";

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
        <Card.Title>{review.title}</Card.Title>
        <Card.Subtitle>{review.category}</Card.Subtitle>
        <Card.Text>Designer: {review.designer}</Card.Text>
        <Card.Img
          variant="top"
          src={review.review_img_url}
          alt={review.title}
        />
        <Card.Text>{review.review_body}</Card.Text>
        <Card.Text>By: {review.owner} </Card.Text>
        <Card.Text>Created at: {review.created_at} </Card.Text>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{review.comment_count} Comments</Accordion.Header>
            <Accordion.Body>
              <ReviewComments />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button>{review.votes} Votes</Button>
      </Card>
    </Container>
  );
};

export default SingleReview;
