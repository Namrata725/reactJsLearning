import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Header from "./Header";

function MainRouter() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
