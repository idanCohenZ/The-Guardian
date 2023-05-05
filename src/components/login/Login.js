import React, { useContext } from "react";
import "./Login.css";
import LoginContext from "../../context/LoginContext";
import { getAnalyze } from "../../utils/https";
import { Link } from "react-router-dom";

function Login() {
  const { signed, setSigned, setUsername, username, setAllPosts } =
    useContext(LoginContext);

  // const fetchData = () => {
  //   fetch("http://localhost:8000/posts")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setAllPosts(posts.data);
  //     });
  // };

  const handleClick = () => {
    console.log(username);
    if (!signed) {
      // fetchData();
      getAnalyze(username);
      setSigned(!signed);
      // setAllPosts(allPosts);
    } else {
      // setAllPosts([]);
      alert("You need to logout first!");
    }
    // setupInsta();
  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>Login</h2>
            <p>Please enter your username from instagram</p>
          </div>
          <div id="Login">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <Link to="/result">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  handleClick();
                }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// function Approve({ handleClick }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <button
//         type="submit"
//         className="btn btn-primary"
//         onClick={() => {
//           handleShow();
//           handleClick();
//         }}
//       >
//         Login
//       </button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
