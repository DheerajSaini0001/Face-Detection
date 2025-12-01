import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import './FaceRecognition.css';

const FaceRecognition = ({ videoRef, handleVideoOnPlay, detections }) => {
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));
    };

    startVideo();
  }, [videoRef]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl && wrapperRef.current) {
      const handlePlay = () => {
        if (canvasRef.current) {
          canvasRef.current.remove();
        }

        const canvas = faceapi.createCanvasFromMedia(videoEl);
        canvasRef.current = canvas;
        canvas.className = 'canvas-element';
        wrapperRef.current.append(canvas);

        const displaySize = {
          width: videoEl.width,
          height: videoEl.height,
        };
        faceapi.matchDimensions(canvas, displaySize);

        const drawDetections = () => {
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        };

        if (detections.length > 0) {
          drawDetections();
        }
      };

      videoEl.addEventListener('play', handlePlay);

      // Cleanup
      return () => {
        if (videoEl) {
          videoEl.removeEventListener('play', handlePlay);
        }
      };
    }
  }, [detections, videoRef]);

  const captureImage = () => {
    const video = videoRef.current;

    if (video) {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Draw detections and expressions on the canvas
      if (detections.length > 0) {
        const resizedDetections = faceapi.resizeResults(detections, {
          width: canvas.width,
          height: canvas.height,
        });
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }

      const dataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImages((prev) => [...prev, dataUrl]);

      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      const byteString = atob(dataUrl.split(',')[1]);
      const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      const formData = new FormData();
      formData.append('image', blob, 'capture.jpg');

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to upload image.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Image saved successfully', data);
        })
        .catch((error) => {
          console.error('Error saving image:', error);
        });
    }
  };

  const downloadImage = (dataUrl) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `capture-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="face-recognition-container">
      <div className="camera-section">
        <div className="video-wrapper" ref={wrapperRef}>
          <video
            ref={videoRef}
            autoPlay
            muted
            onPlay={handleVideoOnPlay}
            width="720"
            height="560"
            className="video-stream"
          />
          {showToast && (
            <div className="toast-notification">
              <span>✨</span> Image Captured!
            </div>
          )}
        </div>

        <div className="controls-wrapper">
          <button onClick={captureImage} className="capture-button">
            <span>📸</span> Capture Image
          </button>
        </div>
      </div>

      {capturedImages.length > 0 && (
        <div className="gallery-section">
          <h2 className="gallery-title">Captured Moments <span>({capturedImages.length})</span></h2>
          <div className="captured-images-container">
            {capturedImages.map((image, index) => (
              <div key={index} className="image-card" onClick={() => setSelectedImage(image)}>
                <img
                  src={image}
                  alt={`Captured ${index}`}
                  className="captured-image"
                />
                <div className="image-overlay">
                  <span>🔍 View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <div className="modal-actions">
              <button className="modal-action-btn download" onClick={() => downloadImage(selectedImage)}>
                ⬇ Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
