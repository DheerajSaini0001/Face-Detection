import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>About Us</h1>
                <p className="about-intro">
                    Welcome to <strong>Face Expression Detector</strong>, an intelligent and easy-to-use platform designed to analyze human facial emotions in real time. Our goal is to make emotion-recognition technology accessible to everyone — developers, students, creators, and businesses.
                </p>
                <p className="about-description">
                    We use advanced machine learning models to identify expressions such as happy, sad, angry, surprised, neutral, disgusted, and fear from images or live camera input. Whether you are building a smart application, enhancing user experience, or exploring AI for learning purposes, our tool delivers fast and reliable results.
                </p>
            </section>

            {/* Why We Built This */}
            <section className="about-section">
                <h2>Why We Built This</h2>
                <p>Understanding human emotions is essential for better interaction and communication. We created this platform to help:</p>
                <div className="about-grid">
                    <div className="about-card">
                        <span className="icon">💻</span>
                        <h3>Developers</h3>
                        <p>Integrate emotion-recognition AI into their projects</p>
                    </div>
                    <div className="about-card">
                        <span className="icon">🎓</span>
                        <h3>Students</h3>
                        <p>Learn computer vision and machine learning concepts</p>
                    </div>
                    <div className="about-card">
                        <span className="icon">🎨</span>
                        <h3>Creators</h3>
                        <p>Build interactive and innovative experiences</p>
                    </div>
                    <div className="about-card">
                        <span className="icon">📊</span>
                        <h3>Businesses</h3>
                        <p>Explore user sentiment in a simple, data-driven way</p>
                    </div>
                </div>
            </section>

            {/* Mission & Free */}
            <div className="split-section">
                <section className="about-section highlight-box">
                    <h2>Completely Free (For Now)</h2>
                    <p className="highlight-text">Our platform is currently 100% free to use.</p>
                    <p>
                        We believe innovation should be open and accessible to everyone. As we continue improving features and accuracy, we may introduce premium options in the future — but the core tool will always remain accessible.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>To make emotion-recognition AI simple, accurate, and accessible for everyone. We focus on:</p>
                    <ul className="mission-list">
                        <li><span>🔍</span> Transparency</li>
                        <li><span>🛡️</span> User privacy</li>
                        <li><span>⚡</span> Ease of use</li>
                        <li><span>🚀</span> High performance</li>
                    </ul>
                </section>
            </div>

            {/* Privacy First */}
            <section className="about-section privacy-section">
                <div className="privacy-content">
                    <h2>🔒 Privacy First</h2>
                    <p className="privacy-highlight">Your privacy is our top priority.</p>
                    <p>
                        We do not store your images, videos, or camera data. All processing happens securely, and your content always remains yours.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
