import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon">👁️</span>
                    <span className="logo-text">FaceDetect<span className="logo-highlight">AI</span></span>
                </Link>
                <ul className="navbar-links">
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features</Link></li>
                    <li><Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link></li>
                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
                </ul>
                <div className="navbar-actions">
                    <button className="nav-btn">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
