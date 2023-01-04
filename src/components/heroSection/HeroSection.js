import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1 className="hero-header">THE GUARDIAN</h1>
      <p>Do you feel safe?</p>
      <div className="hero-btns">
        <Link to="/login">
          <button className="test-it-btn">TEST IT</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
