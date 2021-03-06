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
import Profile from "./components/Profile";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("jessjelly");

  const isLoggedIn = loggedInUser !== null;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <BrowserRouter>
        <div className={`App__${loggedInUser}`}>
          <AppNav />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/reviews/:review_id/comments"
              element={<ReviewComments />}
            />
            <Route path="*" element={<Errors />} />
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </UserContext.Provider>
  );
}

export default App;
