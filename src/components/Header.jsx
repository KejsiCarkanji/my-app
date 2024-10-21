import React from 'react';
import logo from '../assets/images/profile-logo.jpg';
import '../assets/styles/style.css';

function Header() {
  return (
    <header>
      <a href="index.html">
        <img src={logo} alt="logo" />
      </a>
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>
      <nav className="navbar" id="navbar">
        <ul>
          <li><a href="#App">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project-section">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
