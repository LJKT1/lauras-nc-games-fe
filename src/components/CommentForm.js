import { useState, useEffect, useContext } from "react";
import { postReviewComments } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import Form from "react-bootstrap/Form";

const CommentForm = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentObj = {
      author: loggedInUser,
      body: newComment,
    };
    const review_id = props.review_id;

    setComments((comments) => {
      return [commentObj, ...comments];
    });
    setNewComment("");
    commentObj.username = loggedInUser;
    postReviewComments(review_id, commentObj);
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
