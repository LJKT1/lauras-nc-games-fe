import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
