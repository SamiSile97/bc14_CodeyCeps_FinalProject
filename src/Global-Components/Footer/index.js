import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo-title">
        <img src="./logo.svg" alt="WalkMate Homepage footer logo" />
        <h2>WalkMate</h2>
    
      </div>

      <div className="footer-links">
        
        <div id="home" className="footer-column">
          <ul>
            <img className="minilogo" src="circleNoBg.png" alt="home" />
            <li>Home</li>
            <li>About us</li>
            <li>events</li>
          </ul>
        </div>

        <div id="footer-explore" className="footer-column">
          <ul>
            <img className="minilogo" src="flagdownNoBg.png" alt="explore" />
            <li>Explore</li>
          </ul>
        </div>

        <div id="footer-community" className="footer-column">
          <ul>
            <img className="minilogo" src="triangle_cream.png" alt="community" />
            <li>Community</li>
          </ul>
        </div>

        <div id="footer-signup" className="footer-column">
          <ul>
            <img className="minilogo" src="flagupNoBg.png" alt="signup" />
            <li>Sign up</li>
            <li> Contact us </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
