import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPage.css';

const PricingPage = () => {
    return (
        <div className="pricing-page">
            {/* Hero Section */}
            <section className="pricing-hero">
                <h1>Face Expression Detection</h1>
                <p className="hero-subtitle">Understand emotions in real time using advanced AI.</p>
                <p className="hero-description">
                    Detect smiles, anger, surprise, sadness, and more — instantly and accurately.
                </p>
                <div className="free-banner">
                    Currently 100% Free to Use
                    <span>No sign-up. No limits. No hidden costs.</span>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Upload or Capture</h3>
                        <p>Upload an image or use your webcam.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>AI Analysis</h3>
                        <p>Our AI scans the face and identifies expressions.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Instant Results</h3>
                        <p>Get instant results with confidence scores.</p>
                    </div>
                </div>
                <p className="use-case-note">Suitable for UI testing, user research, analytics, and fun personal projects.</p>
            </section>

            {/* Why Choose & Perfect For */}
            <section className="benefits-section">
                <div className="benefits-container">
                    <div className="benefits-column">
                        <h2>Why Choose Our Tool?</h2>
                        <ul className="benefits-list">
                            <li>No watermark</li>
                            <li>No account required</li>
                            <li>Unlimited usage (for now)</li>
                            <li>Beginner-friendly</li>
                            <li>Business-grade accuracy</li>
                            <li>Works in browser — nothing to install</li>
                        </ul>
                    </div>
                    <div className="benefits-column">
                        <h2>Perfect for:</h2>
                        <ul className="perfect-for-list">
                            <li>✔ Students</li>
                            <li>✔ Developers</li>
                            <li>✔ UX/UI testing</li>
                            <li>✔ Research</li>
                            <li>✔ Emotion-based apps</li>
                            <li>✔ Fun personal projects</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pricing Card */}
            <section className="pricing-card-section">
                <h2>Pricing</h2>
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h3>Free</h3>
                        <span className="pricing-badge">Limited Time</span>
                    </div>
                    <div className="pricing-body">
                        <p>Use the full Face Expression Detection tool completely free.</p>
                        <p>Enjoy unlimited scans and API access during the free period.</p>
                        <div className="pricing-note">
                            <p>Future pricing plans will be announced later.</p>
                            <p>Early users will continue to get special benefits.</p>
                        </div>
                    </div>
                    <div className="pricing-footer">
                        <h3>Try It Now</h3>
                        <p>Upload a photo or open your webcam and experience real-time AI expression detection.</p>
                        <Link to="/" className="cta-button">Start Detecting</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
