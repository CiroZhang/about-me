import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/coursework">Course Work</Link></li>
        <li><Link to="/teaching">Teaching</Link></li>
        <li><Link to="/misc">MISC</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
