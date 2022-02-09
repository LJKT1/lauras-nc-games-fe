import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getSingleReview } from "../utils/api";

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
        <Card.Img
          variant="top"
          src={review.review_img_url}
          alt={review.title}
        />
        <Card.Text>{review.review_body}</Card.Text>
        <Card.Text>Designer: {review.designer}</Card.Text>
        <Card.Text>By: {review.owner} </Card.Text>
        <Card.Text>
          Votes: {review.votes} Comments: {review.comment_count}
        </Card.Text>
        <Card.Text>Created at: {review.created_at} </Card.Text>
      </Card>
    </Container>
  );
};

export default SingleReview;
