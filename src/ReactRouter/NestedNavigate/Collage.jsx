import { NavLink, Outlet, Link } from "react-router";
import "../style.css";
function Collage() {
  return (
    <div style={{ textAlign: "center" }} className="collage">
      <h1>Collage</h1>
      <NavLink to="" className="link">
        Student
      </NavLink>
      <NavLink to="department" className="link">
        Department
      </NavLink>
      <NavLink to="collageDetail" className="link">
        Collage Details
      </NavLink>
      <h2>
        <Link to="/">Go back to home</Link>
      </h2>
      <Outlet />
    </div>
  );
}

export default Collage;
