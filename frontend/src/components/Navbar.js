import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <span className="logo-icon">👁️</span>
                    <span className="logo-text">FaceDetect<span className="logo-highlight">AI</span></span>
                </Link>

                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <div className={isMobileMenuOpen ? 'hamburger open' : 'hamburger'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={isMobileMenuOpen ? 'navbar-links active' : 'navbar-links'}>
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`} onClick={closeMobileMenu}>Features</Link></li>
                    <li><Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} onClick={closeMobileMenu}>Pricing</Link></li>
                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
