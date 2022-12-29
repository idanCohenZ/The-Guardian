import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./NavBar.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/result">
              <Nav.Link href="#result">Result</Nav.Link>
            </Link>
          </Nav>
          <Link to="/login">
            <Button variant="outline-light">Sign-in</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
