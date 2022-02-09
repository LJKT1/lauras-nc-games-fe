import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import sortOptions from "../constants/sortOptions";

const Queries = (props) => {
  return (
    <Nav variant="pills" activeKey="1">
      <NavDropdown
        onSelect={props.setCategory}
        title={`Category: ${
          props.selectedCategory ? props.selectedCategory : "All"
        }`}
        id="nav-dropdown"
      >
        <NavDropdown.Item eventKey={"All"} key={"All"}>
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
      <NavDropdown
        title={`Sort by: ${
          props.selectedSortOrder
            ? sortOptions[props.selectedSortOptionIndex].description
            : "Default"
        }`}
        id="nav-sort-by"
        onSelect={props.setSortOrder}
      >
        {sortOptions.map((sortOption, index) => {
          return (
            <NavDropdown.Item eventKey={index} key={index}>
              {sortOption.description}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </Nav>
  );
};

export default Queries;
