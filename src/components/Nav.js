import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Nav = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <Container fluid="md">
      <Navbar bg="dark">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Navbar.Text>Signed in:{loggedInUser}</Navbar.Text>
      </Navbar>
    </Container>
  );
};
export default Nav;
