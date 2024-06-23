import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>Hello! I'm Ciro👋</h1>
      <img src={require("../images/Ciro-Zhang.png")} alt="Ciro Zhang" className="profile-picture" />
      <p>
        Hey there, I'm Ciro, a third-year student double majoring in Data Science and Computer Engineering at UC San Diego 🔱. 
        I've developed a strong interest in several exciting tech areas. I'm really into computer vision, where machines learn to 
        see and interpret the world. I'm also fascinated by domain generalization in AI/ML, which is all about creating models 
        that can handle new and unexpected tasks.
      </p>
      <p>
        On top of that, I'm diving into the hardware side of AI training, learning about the cool tech that powers AI, like GPUs 
        and TPUs. It's amazing to see how the right hardware can make AI run so much faster and more efficiently.
      </p>
      <p>
        Outside of classes, I'm the Social Chair for ETA KAPPA NU at UCSD. I love organizing events and activities that bring 
        our community together and help us all grow professionally and personally.
      </p>
      <p>
        I also work as a tutor for DSC10, the intro course to Data Science at UCSD. Helping students understand the basics of 
        data science is really rewarding, and I enjoy seeing them progress. If you're in the course, feel free to drop by during 
        my office hours for help with the material or just to chat about data science or computer engineering.
      </p>
      <p>
        In my free time, I enjoy snowboarding, exploring new technologies, and connecting with like-minded individuals. 
        I'm always up for a good discussion about tech, so don't hesitate to reach out if you want to collaborate, discuss 
        something, or have any questions.
      </p>
      <div className="social-links">
        <a href="mailto:ciz001@ucsd.edu" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/email-icon.png")} alt="Email" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ciro-zhang" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/linkedin-icon.png")} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/sunbathingfishs" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/instagram-icon.png")} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.youtube.com/@cirozhang" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/youtube-icon.png")} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
