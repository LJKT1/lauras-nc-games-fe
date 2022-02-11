import { useState, useContext } from "react";
import { postReviewComments } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import Form from "react-bootstrap/Form";

const CommentForm = ({ addComment, review_id }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      username: loggedInUser,
      body: newComment,
    };
    setNewComment("");
    postReviewComments(review_id, commentObj).then((comment) => {
      addComment(comment);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add new comment</Form.Label>
        <Form.Control
          placeholder="Enter comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
