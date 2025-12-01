import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // EmailJS Credentials
        const SERVICE_ID = 'service_31sk105';
        const TEMPLATE_ID = 'template_avhsmch';
        const PUBLIC_KEY = 'ZAVoNKdGhM48XX37z';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-header-section">
                <h1>Contact Us</h1>
                <p>Have questions about our Face Expression Detection tool? We're here to help!</p>
            </div>

            <div className="contact-container">
                <div className="contact-info-column">
                    <div className="info-card">
                        <h2>Get in Touch</h2>
                        <div className="info-item">
                            <span className="icon">📧</span>
                            <div>
                                <h3>Email</h3>
                                <p>dheerajsaini131652@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon">📞</span>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 63751 31652</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <div>
                                <h3>Location</h3>
                                <p>Alwar, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <h2>Support Hours</h2>
                        <div className="hours-item">
                            <span>Mon – Fri:</span>
                            <span>10:00 AM – 6:00 PM</span>
                        </div>
                        <div className="hours-item closed">
                            <span>Sat – Sun:</span>
                            <span>Closed</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-column">
                    <div className="form-card">
                        <h2>Send a Message</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Dheeraj"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="dheeraj@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    rows="5"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`status-message ${status.type}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
