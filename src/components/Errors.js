import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const Errors = (props) => {
  const [error, setError] = useState(null);

  useEffect(() => {});
  return (
    <Container>
      <Card>
        <Card.Body>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>Error</Card.Title>
                <Card.Text>Status: 404</Card.Text>
                <Card.Text>Message: Not found</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Errors;
