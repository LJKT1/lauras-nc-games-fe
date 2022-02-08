import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [categories]);

  return (
    <nav className="Nav">
      <h1>Nav</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3>{category.slug}</h3>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
