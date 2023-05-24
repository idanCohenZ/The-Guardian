import React, { useContext, useState } from "react";
import "./Login.css";
import LoginContext from "../../context/LoginContext";
import { getAnalyze } from "../../utils/https";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const { signed, setSigned, setAnalyzedData } = useContext(LoginContext);
  const [userId, setUserId] = useState("");

  const handleClick = async () => {
    console.log(userId);
    if (!signed) {
      setSigned(!signed);
      const data = await getAnalyze(userId);
      if (data) {
        setAnalyzedData(data);
        navigate("/result");
      } else {
        setSigned(false);
        // navigate("/");
      }
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
            <p>Please enter the code from instagram</p>
          </div>
          <div id="Login">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="USER-ID"
                onChange={(e) => setUserId(e.target.value)}
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
