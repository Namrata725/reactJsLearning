import { Link } from "react-router";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Page Not Found</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclJBjkZUvmktXLQQWF1HCW5lih1l8eg2M0w&s"
        style={{ width: "550px", paddingTop: "30px", paddingBottom: "30px" }}
      />
      <br />
      <Link to="/">
        <h4>PAGE NOT FOUND</h4>
      </Link>
    </div>
  );
}

export default PageNotFound;
