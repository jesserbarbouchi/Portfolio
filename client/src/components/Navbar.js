// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="l-header">
    <nav className="nav bd-grid">
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/">Home</Link></li>
        {/* <li className="nav__item"><Link to="/about">About</Link></li> */}
        <li className="nav__item"><Link to="/work">Work Experience</Link></li>
        {/* <li className="nav__item"><Link to="/skills">Skills</Link></li> */}
        <li className="nav__item"><Link to="/projects">Projects</Link></li>
        <li className="nav__item"><Link to="/contact">Contact</Link></li>
        {/* <li className="nav__item"><Link to="/api-integration">API Integration</Link></li> */}
        <li className="nav__item"><Link to="/weather-api">Weather API</Link></li>
        <li className="nav__item"><Link to="/technologies">Technologies</Link></li>
        <li className="nav__item"><Link to="/blog">Blogs</Link></li>
      </ul>
      </div>
      
    </nav>

    </header>
  );
};

export default Navbar;
