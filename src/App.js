import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import { getCategories } from "./utils/api";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [categories]);

  const [selectedCategory, setSelectedCategory] = useState();

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar
          selectedCategory={selectedCategory}
          setCategory={handleSelect}
          categories={categories}
        />
        <Routes>
          <Route
            path="/"
            element={<Reviews selectedCategory={selectedCategory} />}
          />
          <Route
            path="/reviews"
            element={<Reviews selectedCategory={selectedCategory} />}
          />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
