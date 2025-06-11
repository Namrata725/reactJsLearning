import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BootstrapDemo() {
  return (
    <div>
      <h4>BootstrapDemo</h4>
      <Button>click me!!</Button>
      <br />
      <br />
      <Alert variant="secondary">Hello </Alert>
      <br />
      <Button variant="success"> hello</Button>
      <br />
      <br />
      <Alert variant="danger">hello</Alert>;
    </div>
  );
}
export default BootstrapDemo;
