import { useEffect, useState } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import { getUsers } from "../utils/api";

//Not currently implemented

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <main className="Users">
      <ul>
        <Container fluid="md">
          <Card style={{ width: "18rem" }}>
            <ListGroup>
              {users.map((user) => {
                console.log(user, "user");
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
