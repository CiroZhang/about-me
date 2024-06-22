import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="about-me/">About</Link></li>
        <li><Link to="about-me/projects">Projects</Link></li>
        <li><Link to="about-me/coursework">Course Work</Link></li>
        <li><Link to="about-me/teaching">Teaching</Link></li>
        <li><Link to="about-me/misc">MISC</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
