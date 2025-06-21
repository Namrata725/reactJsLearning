import { Link, NavLink, Outlet } from "react-router";
import "./style.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink to="/" className="link">
            <h2>Logo</h2>{" "}
          </NavLink>
        </div>

        <div>
          <ul>
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/login">
                LogIn
              </NavLink>
            </li>

            <li>
              <NavLink to="/collage" className="link" end>
                Collage
              </NavLink>
            </li>

            <li>
              <NavLink to="/user" className="link" end>
                Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/user/list" className="link">
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
