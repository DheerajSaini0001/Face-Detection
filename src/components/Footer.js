import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>FaceDetectAI</h3>
                        <p>Advanced face recognition technology powered by AI.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <a href="/features">Features</a>
                            <a href="/pricing">Pricing</a>
                            <a href="/">Live Demo</a>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="/about">About Us</a>
                            <a href="#careers">Careers</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Developer</h4>
                            <span className="developer-info">Dheeraj Saini</span>
                            <a href="mailto:dheerajsaini131652@gmail.com">dheerajsaini131652@gmail.com</a>
                            <span className="developer-info">+91 63751 31652</span>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FaceDetectAI. Developed by Dheeraj Saini.</p>
                    <div className="social-icons">
                        <span>🐦</span>
                        <span>💼</span>
                        <span>📸</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
