import React from 'react';
import FaceRecognition from '../components/FaceRecognition';

const Home = ({ modelsLoaded, videoRef, handleVideoOnPlay, detections }) => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <h1>Face Expressions Detection</h1>
                <p>Experience the power of AI-driven face detection in real-time.</p>
            </section>

            <div className="camera-container">
                {modelsLoaded ? (
                    <FaceRecognition
                        videoRef={videoRef}
                        handleVideoOnPlay={handleVideoOnPlay}
                        detections={detections}
                    />
                ) : (
                    <div className="loading-container">
                        <div className="loader"></div>
                        <p>Loading AI Models...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
