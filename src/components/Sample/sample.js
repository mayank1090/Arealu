import React, { useState, useRef } from 'react';

const CameraComponent = () => {
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [capturedImages, setCapturedImages] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCameraSwitch = () => {
    setIsFrontCamera(!isFrontCamera);
  };

  const handleTakePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png'); // Convert canvas content to a data URL
      setCapturedImages([...capturedImages, dataURL]);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: isFrontCamera ? 'user' : 'environment' },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Initialize camera on component mount
  React.useEffect(() => {
    startCamera();
    return () => {
      // Cleanup: stop camera on unmount
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isFrontCamera]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={handleCameraSwitch}>Switch Camera</button>
      <button onClick={handleTakePicture}>Take Picture</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div>
        {capturedImages.map((imageURL, index) => (
          <img key={index} src={imageURL} alt={`Captured ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CameraComponent;
