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
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleReview(review_id)
      .then((res) => {
        setReview(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [review_id]);

  if (error) {
    return (
      <>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Error</Card.Title>
              <Card.Text>Status: {error.response.status}</Card.Text>
              <Card.Text>Message: {error.response.data.msg}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
  return (
    <Container fluid="md">
      <Card>
        <Card.Body>
          <Card.Header>
            <Card.Title className="m-2">{review.title}</Card.Title>
          </Card.Header>
          <Card.Subtitle className="m-1">
            Category: {review.category && titleCase(review.category)}
          </Card.Subtitle>
          <Card.Text className="m-1">Designer: {review.designer}</Card.Text>
          <Card.Img
            variant="top"
            className="sgl-review-img"
            src={review.review_img_url}
            alt={review.title}
          />
          <Card.Body>{review.review_body}</Card.Body>
          <Card.Text className="m-1">By: {review.owner}</Card.Text>
          <Card.Text className="m-1">
            Posted: {new Date(review.created_at).toLocaleDateString()}
          </Card.Text>
          <ReviewVotes review={review} />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {review.comment_count} Comments
              </Accordion.Header>
              <Accordion.Body>
                {review.review_id && (
                  <ReviewComments review_id={review.review_id} />
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleReview;
