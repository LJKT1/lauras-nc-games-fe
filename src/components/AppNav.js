import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { getUserAvatar, getUsers } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AppNav = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const signOut = () => {
    setLoggedInUser("");
  };

  const signIn = () => {
    const username = window.prompt("Please enter username");
    setLoggedInUser(username);
  };

  const [avatar, setAvatar] = useState();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate(`/profile`);
  };

  useEffect(() => {
    getUserAvatar(loggedInUser)
      .then((res) => {
        setAvatar(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [loggedInUser]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Laura's NC Games Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="/users">Users</Nav.Link> */}
          </Nav>
          <Nav className="ms-auto">
            {loggedInUser && (
              <Nav.Item>
                <Image src={avatar} className="avatar" />
              </Nav.Item>
            )}

            {loggedInUser && (
              <NavDropdown title={loggedInUser} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => gotoProfile()}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => signOut()}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {!loggedInUser && (
              <Nav>
                <Nav.Link onClick={() => signIn()}>Sign in</Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNav;
