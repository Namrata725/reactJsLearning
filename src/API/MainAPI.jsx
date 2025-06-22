import { NavLink, Route, Routes } from "react-router";
import "./style.css";
import JsonApiIntegrationWithLoader from "./JsonApiIntegrationWithLoader";
import UserAdd from "./UserAdd";
function MainAPI() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">User List</NavLink>
        </li>
        <li>
          <NavLink to="/add">User Add</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<JsonApiIntegrationWithLoader />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </div>
  );
}

export default MainAPI;
