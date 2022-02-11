import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import ReviewComments from "./components/ReviewComments";
import { UserContext } from "./contexts/UserContext";
import Users from "./components/Users";
import Errors from "./components/Errors";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className={`App__${loggedInUser}`}>
          <AppNav />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
            <Route
              path="/reviews/:review_id/comments"
              element={<ReviewComments />}
            />
            <Route path="*" element={<Errors />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
