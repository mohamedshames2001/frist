import React from "react";
import { Button } from "./Button";
import "./HeroSictoin.css";
import "../App.css"
function HeroSictoin() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>Wellcome to Rract</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {" "}
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          WHAITCH<i className="fab fa-react"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSictoin;
