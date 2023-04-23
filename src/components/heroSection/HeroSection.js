import React, { useContext } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import { setupInsta } from "../../utils/https";
import LoginContext from "../../context/LoginContext";

function HeroSection() {
  let navigate = useNavigate();
  const { signed } = useContext(LoginContext);

  const handleClick = () => {
    // console.log(username);
    // setSigned(!signed);
    if (!signed) {
      // fetchData();
      setupInsta();
      navigate("/login");
      // setAllPosts(allPosts);
    } else {
      // setAllPosts([]);
      alert("You need to logout first!");
    }
    // setupInsta();
  };
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1 className="hero-header">THE GUARDIAN</h1>
      <p>Do you feel safe?</p>
      <div className="hero-btns">
        <button
          className="test-it-btn"
          to="/login"
          onClick={() => {
            handleClick();
          }}
        >
          TEST IT
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
