import React from 'react';
import './Features.css';

const featuresData = [
    {
        icon: '🎯',
        title: 'Real-Time Facial Expression Detection',
        description: 'Instantly identifies emotions such as Happy, Sad, Angry, Surprised, Neutral, Fearful, Disgusted. Works directly through the webcam or uploaded images.'
    },
    {
        icon: '🧠',
        title: 'AI-Powered Emotion Analysis',
        description: 'Powered by deep learning models (CNNs, Transformers, or MediaPipe/FaceMesh). High accuracy even in low-light or complex backgrounds.'
    },
    {
        icon: '📸',
        title: 'Webcam & Image Upload Support',
        description: 'Users can choose to capture expressions live through webcam or upload photos for instant analysis.'
    },
    {
        icon: '🎛',
        title: 'Confidence Score for Each Emotion',
        description: 'Displays confidence level (e.g., 87% Happy). Helps users understand the reliability of predictions.'
    },
    {
        icon: '📊',
        title: 'Interactive Results Dashboard',
        description: 'Shows detected emotions with Graphs, Bar charts, and Heatmaps. Realtime updating charts for continuous webcam analysis.'
    },
    {
        icon: '🖼',
        title: 'Face Landmark Detection',
        description: 'Highlights key points on the face (eyes, eyebrows, lips, jawline). Helps users visually understand how the model interprets expressions.'
    },
    {
        icon: '⚙️',
        title: 'Multi-Face Detection',
        description: 'Detects expressions of multiple people at once. Useful for classrooms, meetings, or group reactions.'
    },
    {
        icon: '🌐',
        title: 'Works in Browser (No Installation)',
        description: 'Runs fully client-side using TensorFlow.js or WebAssembly. No data is uploaded — ensures privacy.'
    },
    {
        icon: '🔒',
        title: 'Privacy & Security',
        description: 'All detection happens locally on the device. No images stored, shared, or sent to any server.'
    },
    {
        icon: '🌓',
        title: 'Dark Mode / Light Mode',
        description: 'User-friendly UI with theme toggle.'
    },
    {
        icon: '📱',
        title: 'Fully Responsive Design',
        description: 'Works smoothly on desktop, tablet, and mobile.'
    },
    {
        icon: '🚀',
        title: 'Performance Optimized',
        description: 'Uses lightweight models for fast detection. Supports GPU acceleration when available.'
    },
    {
        icon: '🧩',
        title: 'Developer Friendly',
        description: 'API to integrate emotion detection into Games, Survey tools, E-learning platforms, and HR applications.'
    },
    {
        icon: '💾',
        title: 'Downloadable Analysis Report',
        description: 'Export results as PDF / JSON / CSV. Useful for research or professional analysis.'
    },
    {
        icon: '🔊',
        title: 'Emotion-Triggered Actions',
        description: 'Automatically perform actions based on detected emotions: Play a sound when happy, Change UI color, or Alert on negative emotion spike.'
    }
];

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2>Key Features</h2>
                    <p>Discover what makes our Face Expression Detection powerful and unique.</p>
                </div>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
