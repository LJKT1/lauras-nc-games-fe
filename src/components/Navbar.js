import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [categories]);

  return (
    <Nav variant="pills" activeKey="1">
      <NavDropdown title="Categories" id="nav-dropdown">
        {categories.map((category) => {
          return (
            <NavDropdown.Item eventKey={category.slug}>
              {category.slug}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </Nav>

    // <nav className="Nav">
    //   <h1>Nav</h1>
    //   <ul>
    //     {categories.map((category) => {
    //       return (
    //         <li key={category.slug}>
    //           <h3>{category.slug}</h3>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </nav>
  );
};

export default Navbar;
