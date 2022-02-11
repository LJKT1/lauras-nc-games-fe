import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  const logIn = (newUser) => {
    setLoggedInUser(newUser);
  };

  return (
    <main className="Users">
      <ul>
        <Container fluid="md">
          <Card style={{ width: "18rem" }}>
            <ListGroup>
              {users.map((user) => {
                return (
                  <ListGroup.Item key={user.username}>
                    <Card.Title>{user.username}</Card.Title>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Container>
      </ul>
    </main>
  );
};

export default Users;
