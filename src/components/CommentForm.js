import { useState, useEffect } from "react";
import { postReviewComments } from "../utils/api";
import Form from "react-bootstrap/Form";

const CommentForm = (review_id) => {
  //   const [comment, setComment] = useState();
  return (
    <Form>
      <Form.Group>
        <Form.Label>Add new comment</Form.Label>
        <Form.Control placeholder="Enter comment"></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default CommentForm;
