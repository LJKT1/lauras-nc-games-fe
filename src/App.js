import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import ReviewComments from "./components/ReviewComments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route
            path="/reviews/:review_id/comments"
            element={<ReviewComments />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
