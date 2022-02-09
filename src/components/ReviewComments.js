import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getReviewComments } from "../utils/api";

const ReviewComments = (props) => {
  const review_id = props.review_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReviewComments(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  return (
    <ul>
      <Container>
        <Card style={{ width: "12rem" }}>
          <ListGroup>
            {comments.map((comment) => {
              return (
                <ListGroup.Item key={comment.comment_id}>
                  <Card.Text>{comment.body}</Card.Text>
                  <Card.Subtitle>Author: {comment.author}</Card.Subtitle>
                  <Card.Subtitle>Posted: {comment.created_at}</Card.Subtitle>
                  <Card.Subtitle>{comment.votes} Votes</Card.Subtitle>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
      </Container>
    </ul>
  );
};

export default ReviewComments;
