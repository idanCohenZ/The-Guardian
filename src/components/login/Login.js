import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Login() {
  // const [show, setShow] = useState(false);
  // const handleSubmit = () => {
  //   Approve(show, setShow);
  // };
  return (
    <div className="login-body">
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="for-pwd" />
          <label for="tab-2" class="tab"></label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username or Email
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              {/* <div class="group">
                <input type="submit" class="button" value="Sign In" />
              </div> */}
              <Approve />
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function Approve() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="group" onClick={handleShow}>
        <input type="submit" class="button" value="Sign In" />
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button> */}

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
