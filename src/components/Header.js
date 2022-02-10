import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Header = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col className="text-center">
          <h1>Laura's NC Games Reviews</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
