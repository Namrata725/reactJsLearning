import { Link, Outlet } from "react-router";
import "./style.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <Link to="/" className="link">
            <h2>Logo</h2>{" "}
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/user/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/user/login">
                LongIn
              </Link>
            </li>

            <li>
              <Link to="/collage" className="link">
                Collage
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
