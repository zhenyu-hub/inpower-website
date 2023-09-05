import React, { useState } from 'react';
import '../css/navbar.css'; // Import the CSS file
import logoImage from '../img/logo.png'; // Import your logo image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/comments">Comments</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className={`join-button ${menuOpen ? 'open' : ''}`}>Join</button>
    </nav>
  );
}

export default Navbar;
