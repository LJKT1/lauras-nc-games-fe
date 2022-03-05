import { useContext } from "react";
import { getUser } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { Card, Container } from "react-bootstrap";

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  getUser(loggedInUser).then((user) => {
    console.log(user);
    //this does return user object but it then fails to render
    // also user keeps getting logged out
    return (
      <>
        <Container>
          <Card>
            <Card.Title>Username: {user.username}</Card.Title>
          </Card>
        </Container>
      </>
    );
  });
};

export default Profile;
