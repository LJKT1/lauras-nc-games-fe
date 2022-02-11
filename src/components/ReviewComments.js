import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CommentForm from "./CommentForm";
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
      <Container fluid="md">
        <Card>
          <Card.Body>
            <ListGroup>
              {comments.map((comment) => {
                return (
                  <ListGroup.Item key={comment.comment_id}>
                    <Card.Text>{comment.body}</Card.Text>
                    <Card.Subtitle>Author: {comment.author}</Card.Subtitle>

                    <Card.Subtitle>
                      Posted:{" "}
                      {new Date(comment.created_at).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Subtitle>{comment.votes} Votes</Card.Subtitle>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <CommentForm review_id={review_id} />
          </Card.Body>
        </Card>
      </Container>
    </ul>
  );
};

export default ReviewComments;
