import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#services" className="footer-link">Services</a>
                    <a href="#about" className="footer-link">About Us</a>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
