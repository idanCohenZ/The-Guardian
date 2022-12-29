import React from "react";
import Button from "react-bootstrap/Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="/login">
          <Button variant="outline-light" onClick={console.log("hey")}>
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
