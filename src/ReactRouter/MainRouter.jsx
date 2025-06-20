import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Header from "./Header";
import Collage from "./NestedNavigate/Collage";
import Student from "./NestedNavigate/Student";
import CollageDetails from "./NestedNavigate/CollageDetails";
import Department from "./NestedNavigate/Department";

function MainRouter() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* ------------ */}

        <Route path="/collage" element={<Collage />}>
          <Route path="student" element={<Student />} />
          <Route path="collageDetail" element={<CollageDetails />} />
          <Route path="department" element={<Department />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
