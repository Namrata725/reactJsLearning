import { NavLink, Outlet } from "react-router";
import "../style.css";
function Collage() {
  return (
    <div style={{ textAlign: "center" }} className="collage">
      <h1>Collage</h1>
      <NavLink to="student" className="link">
        Student
      </NavLink>
      <NavLink to="department" className="link">
        Department
      </NavLink>
      <NavLink to="collageDetail" className="link">
        Collage Details
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Collage;
