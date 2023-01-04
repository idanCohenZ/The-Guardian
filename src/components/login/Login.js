import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleClick = () => {
    console.log(user);
  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>Admin Login</h2>
            <p>Please enter your email and password</p>
          </div>
          <div id="Login">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email Address"
                onChange={(e) =>
                  setUser({
                    username: e.target.value,
                    password: user.password,
                  })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={(e) =>
                  setUser({
                    username: user.username,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <Approve handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function Approve({ handleClick }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          handleShow();
          handleClick();
        }}
      >
        Login
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
