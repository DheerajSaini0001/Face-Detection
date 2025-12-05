import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page">
            <div className="privacy-header-section">
                <h1>Privacy Policy</h1>
                <div className="privacy-meta">
                    <span>📅 Last updated: 1 December 2025</span>
                    <span>🚀 Effective date: 1 December 2025</span>
                </div>
            </div>

            <div className="privacy-content-wrapper">
                <section className="privacy-intro-card">
                    <p>
                        This Privacy Policy describes how <strong>Face Expression Detector</strong> (“we”, “us”, or “our”) collects, uses, stores, protects, and shares information from or about users (“you”, “your”, or “users”) when you visit or use our face-expression detection website located at <span className="highlight-url">https://yourwebsite.com</span> (“Service”). By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                </section>

                <div className="policy-grid">
                    <section className="policy-card">
                        <h2>📂 1. Information We Collect</h2>

                        <h3>a) Automatically Collected Data</h3>
                        <p>We may automatically collect certain information when you use the Service, including:</p>
                        <ul>
                            <li>Device and browser information (e.g., browser type, operating system, IP address, device type)</li>
                            <li>Usage data (e.g., date and time of access, features used, pages viewed, performance logs, error logs)</li>
                            <li>Technical data needed for face-expression detection (e.g., image/video frames temporarily processed for analysis)</li>
                        </ul>

                        <h3>b) User-Provided Data</h3>
                        <p>We collect the following information only when you choose to provide it:</p>
                        <ul>
                            <li>Images or videos uploaded by you for face-expression detection</li>
                            <li>Optional details such as your name or email address (only if you submit them)</li>
                        </ul>
                    </section>

                    <section className="policy-card">
                        <h2>⚙️ 2. How We Use Your Information</h2>
                        <p>We use collected information for the following purposes:</p>
                        <ul>
                            <li>To provide and operate the face-expression detection features</li>
                            <li>To analyze usage and improve Service performance and accuracy</li>
                            <li>To communicate with you when you contact us (if you provide contact information)</li>
                            <li>To meet legal, safety, and security obligations, including preventing misuse</li>
                        </ul>
                    </section>

                    <section className="policy-card">
                        <h2>💾 3. Data Storage and Retention</h2>
                        <ul>
                            <li>Any images or videos submitted for detection are processed temporarily and are not stored permanently unless you choose to save them.</li>
                            <li>Optional personal data (such as your email) is stored only as long as necessary to respond to your request.</li>
                            <li>Data that is no longer needed is deleted or anonymized.</li>
                        </ul>
                    </section>

                    <section className="policy-card">
                        <h2>🛡️ 4. Data Security</h2>
                        <p>
                            We use reasonable administrative and technical measures to protect your data from unauthorized access, alteration, or disclosure. This includes the use of HTTPS for secure data transmission.
                        </p>
                        <p>
                            However, no internet-based service is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="policy-card">
                        <h2>🤝 5. Sharing and Disclosure</h2>
                        <ul>
                            <li>We do not sell, rent, or lease your personal information to third parties.</li>
                            <li>We may share anonymized or aggregated usage data for analytics or improvement.</li>
                            <li>We may disclose information only when required by law, court order, or to protect the rights and safety of our users and the Service.</li>
                        </ul>
                    </section>

                    <section className="policy-card">
                        <h2>🍪 6. Cookies and Tracking</h2>
                        <p>We may use cookies or similar technologies to:</p>
                        <ul>
                            <li>Improve your experience</li>
                            <li>Track usage statistics</li>
                            <li>Save your preferences</li>
                        </ul>
                        <p>You may disable cookies in your browser, but some features may not function properly.</p>
                    </section>

                    <section className="policy-card">
                        <h2>🧸 7. Children’s Privacy</h2>
                        <ul>
                            <li>Our Service is not intended for children under 13 years of age.</li>
                            <li>We do not knowingly collect personal information from children.</li>
                            <li>If we learn that a child under 13 has submitted data, we will delete it as soon as possible.</li>
                        </ul>
                    </section>

                    <section className="policy-card">
                        <h2>⚖️ 8. Your Rights</h2>
                        <p>Depending on your region, you may have rights such as:</p>
                        <ul>
                            <li>Accessing your personal data</li>
                            <li>Requesting correction or deletion</li>
                            <li>Withdrawing consent</li>
                            <li>Opting out of tracking (where applicable)</li>
                        </ul>
                        <p>To exercise any rights, please contact us using the details below.</p>
                    </section>

                    <section className="policy-card">
                        <h2>🔄 9. Changes to Policy</h2>
                        <ul>
                            <li>We may update this Privacy Policy occasionally.</li>
                            <li>Updates will appear on this page with an updated “Last updated” date.</li>
                            <li>If major changes occur (such as storing images longer or adding third-party sharing), we will provide a notice on the website.</li>
                        </ul>
                    </section>

                    <section className="policy-card contact-card">
                        <h2>📧 10. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                        <div className="contact-box">
                            <p><strong>Email:</strong> <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
                            <p><strong>Address:</strong> [Your Company Address, optional]</p>
                        </div>
                    </section>

                    <section className="policy-card disclaimer-card">
                        <h2>⚠️ 11. Disclaimer</h2>
                        <p>
                            Our face-expression detection Service is currently free. If we introduce paid features or change how we use or store data, we will update this Privacy Policy accordingly.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
