import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const Errors = (props) => {
  const [error, setError] = useState(null);

  useEffect(() => {});

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Error</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Errors;
