import { useEffect, useState, useContext } from "react";
import { getUser } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { Card, Container } from "react-bootstrap";
import CommentForm from "./CommentForm";

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    getUser(loggedInUser)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
    <Container>
      <Card>
        <Card.Body>
          <Card.Header>User: {user?.username}</Card.Header>
          <Card.Img
            variant="top"
            className="profile-pic"
            src={user?.avatar_url}
            alt={user?.username}
          />
          <Card.Text>Name: {user?.name}</Card.Text>
          <Card.Text>Username: {user?.username}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
