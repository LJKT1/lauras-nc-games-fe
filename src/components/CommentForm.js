import { useState, useEffect, useContext } from "react";
import { postReviewComments } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import Form from "react-bootstrap/Form";

const CommentForm = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState(props.comments);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      username: loggedInUser,
      body: newComment,
    };
    setNewComment("");
    postReviewComments(props.review_id, commentObj).then((comment) => {
      setComments([...comments, comment]);
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
