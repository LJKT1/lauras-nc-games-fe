import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = (props) => {
  return (
    <Nav variant="pills" activeKey="1" onSelect={props.setCategory}>
      <NavDropdown
        title={`Category: ${
          props.selectedCategory ? props.selectedCategory : "All"
        }`}
        id="nav-dropdown"
      >
        <NavDropdown.Item eventKey={"all"} key={"all"}>
          All
        </NavDropdown.Item>
        {props.categories.map((category) => {
          return (
            <NavDropdown.Item eventKey={category.slug} key={category.slug}>
              {category.slug}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </Nav>
  );
};

export default Navbar;
