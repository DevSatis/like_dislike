import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Liked from "./components/Liked";
import Disliked from "./components/Disliked";
import LeftNav from "./components/LeftNav";

function App() {

  return (
    <>
      <LeftNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Liked />} />
          <Route path="/dislike" element={<Disliked />} />
        </Routes>
      </LeftNav>
    </>
  );
}

export default App;
