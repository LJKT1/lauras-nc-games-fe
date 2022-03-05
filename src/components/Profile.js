import { useContext } from "react";
import { getUser } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { Card, Container } from "react-bootstrap";

//Temporary placeholder content is a copy of the Users page

const Profile = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  //   const [user, setUser] = useState();

  getUser(loggedInUser).then((user) => {
    console.log(user);
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
