import React, { useContext } from "react";
import "./Login.css";
import LoginContext from "../../context/LoginContext";
import { getAnalyze } from "../../utils/https";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const { signed, setSigned, setUsername, username, setAnalyzedData } =
    useContext(LoginContext);

  const handleClick = async () => {
    console.log(username);
    if (!signed) {
      const data = await getAnalyze(username);
      setSigned(!signed);
      setAnalyzedData(data);
      navigate("/result");
    } else {
      alert("You need to logout first!");
    }
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
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                handleClick();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
