import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  const gotoReview = (review_id) => {
    navigate(`/reviews/${review_id}`);
  };

  useEffect(() => {
    getReviews(props.selectedCategory).then((res) => {
      setReviews(res);
    });
  }, [props.selectedCategory]);
  return (
    <main className="Reviews">
      <ul>
        <Container fluid="md">
          <Card style={{ width: "18rem" }}>
            <ListGroup>
              {reviews.map((review) => {
                return (
                  <ListGroup.Item key={review.review_id}>
                    <Card.Title>{review.title}</Card.Title>
                    <Card.Subtitle>{review.category}</Card.Subtitle>
                    <Card.Img
                      variant="top"
                      src={review.review_img_url}
                      alt={review.title}
                    />
                    <Card.Text>By: {review.owner} </Card.Text>
                    <Card.Text>
                      Votes: {review.votes} Comments: {review.comment_count}
                    </Card.Text>
                    <Button onClick={() => gotoReview(review.review_id)}>
                      Go to Review
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Container>
      </ul>
    </main>
  );
};

export default Reviews;
