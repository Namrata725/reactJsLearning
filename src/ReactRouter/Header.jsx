import { Link } from "react-router";
import "./style.css";
function Header() {
  return (
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
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
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
  );
}

export default Header;
