import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar bg="dark">
      <Link to="/">Home</Link>
    </Navbar>
  );
};
export default Nav;
