import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(props.selectedCategory).then((res) => {
      setReviews(res);
    });
  }, [props.selectedCategory]);
  return (
    <main className="Reviews">
      <h2>Reviews</h2>

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
                  </ListGroup.Item>
                );
              })}
            </ListGroup>{" "}
          </Card>
        </Container>
      </ul>
    </main>
  );
};

export default Reviews;
