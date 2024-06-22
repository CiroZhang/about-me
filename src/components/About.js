import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>Hello! I'm Ciro👋</h1>
      <p>I am a third-year Data Science and Computer Engineering double major at UC San Diego 🔱.</p>
      <p>Here is a brief summary about me...</p>
      <ul>
        <li>Coding Enthusiast</li>
        <li>Avid Reader</li>
        <li>Music Lover</li>
      </ul>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ciro-zhang" target="_blank" rel="noopener noreferrer">
          <img src= {require("../images/linkedin-icon.png")} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/sunbathingfishs" target="_blank" rel="noopener noreferrer">
          <img src= {require("../images/instagram-icon.png")} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.youtube.com/@cirozhang" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/youtube-icon.png")} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
