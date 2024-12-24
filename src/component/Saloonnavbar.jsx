import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import {Link } from 'react-router-dom';

const Saloonnavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>SAANTHI HAIR STYLES</h1>
            </div>
            <nav>
                {/* Conditional class addition for mobile menu */}
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

                   <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>

                   <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/gallary" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
                {/* Hamburger icon for toggling mobile menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Saloonnavbar;
