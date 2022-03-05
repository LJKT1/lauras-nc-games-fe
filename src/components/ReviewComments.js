import { useEffect, useState, useContext } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import CommentForm from "./CommentForm";
import { getReviewComments, deleteComment } from "../utils/api";

const ReviewComments = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const review_id = props.review_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReviewComments(review_id).then((res) => {
      setComments(res);
    });
  }, [review_id]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <ul>
      <Container fluid="md">
        <ListGroup>
          {comments.map((comment, index) => {
            return (
              <ListGroup.Item key={comment.comment_id}>
                <Card>
                  <Card.Body>
                    <Card.Text>{comment.body}</Card.Text>
                    <Card.Text className="m-1">
                      Author: {comment.author}
                    </Card.Text>

                    <Card.Text className="m-1">
                      Posted:{" "}
                      {new Date(comment.created_at).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text>Votes: {comment.votes} </Card.Text>
                    {loggedInUser && loggedInUser === comment.author && (
                      <Button
                        size="sm"
                        onClick={() => {
                          setComments((currComments) => {
                            const newComments = [...currComments];
                            newComments.splice(index, 1);
                            return newComments;
                          });
                          deleteComment(comment.comment_id);
                        }}
                      >
                        Delete
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <CommentForm addComment={addComment} review_id={review_id} />
      </Container>
    </ul>
  );
};

export default ReviewComments;
