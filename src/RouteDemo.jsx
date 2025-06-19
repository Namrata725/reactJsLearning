import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Button } from "react-bootstrap";
function RouteDemo() {
  return (
    <div>
      <h1>Route Demo</h1>
      <BrowserRouter>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <hr />
        <Button variant="primary" as={Link} to="/">
          {" "}
          Home
        </Button>
        <Button variant="secondary" as={Link} to="/about">
          {" "}
          About
        </Button>
        <Button variant="success" as={Link} to="/contact">
          {" "}
          Contact
        </Button>

        <hr />
        <Routes>
          <Route path="/" element={<h2>Home</h2>}></Route>
          <Route path="/about" element={<h2>About</h2>}></Route>
          <Route path="/contact" element={<h2>Contact</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteDemo;
