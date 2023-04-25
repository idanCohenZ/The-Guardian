import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import "./NavBar.css";

function ColorSchemesExample() {
  const { signed, setSigned } = useContext(LoginContext);
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand href="#home">
              <img
                src="/images/logo.png"
                className="navbar-logo"
                alt="logo.jpg"
              />
              {/* THE GUARDIEN */}
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/result" className="nav-link">
              <Nav.Link href="#result">Result</Nav.Link>
            </Link>
          </Nav>
          {signed && (
            <div className="welcome-text">
              {/* <h5 className="hello-text">Hello {username}</h5> */}
              <Link
                to="/"
                onClick={() => {
                  setSigned(!signed);
                }}
                className="out-text"
              >
                Sign Out
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
