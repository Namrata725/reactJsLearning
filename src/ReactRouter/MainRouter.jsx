import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Header from "./Header";
import Collage from "./NestedNavigate/Collage";
import Student from "./NestedNavigate/Student";
import CollageDetails from "./NestedNavigate/CollageDetails";
import Department from "./NestedNavigate/Department";
import UserList from "./UserList";
import UserPage from "./UserPage";

function MainRouter() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/list?" element={<UserList />} />
          <Route path="/user/:id/:name?" element={<UserPage />} />

          <Route path="user">
            <Route path="/user/about" element={<About />} />
            <Route path="/user/login" element={<Login />} />
          </Route>
        </Route>
        {/* ------------ */}

        <Route path="/collage" element={<Collage />}>
          <Route index element={<Student />} />
          <Route path="collageDetail" element={<CollageDetails />} />
          <Route path="department" element={<Department />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
