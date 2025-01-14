import React, { useEffect, useState } from 'react';  
import './App.css';  

function App() {  
  const [videoStream, setVideoStream] = useState(null);  
  const [detectionState, setDetectionState] = useState('Idle');  

  useEffect(() => {  
    async function getAccessToWebcam() {  
      try {  
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });  
        setVideoStream(stream);  
      } catch (err) {  
        console.error('Error accessing webcam:', err);  
      }  
    }  
    getAccessToWebcam();  
  }, []);  

  const startAnalysis = () => {  
    setDetectionState('Detecting...');  
    // Insert TensorFlow.js model logic here  
  };  

  const stopAnalysis = () => {  
    setDetectionState('Idle');  
    // Stop model predictions  
  };  

  return (  
    <div className="App">  
      <h1>Epilepsy Detection Using Webcam</h1>  
      {videoStream ? (  
        <video  
          autoPlay  
          playsInline  
          muted  
          ref={(videoElement) => {  
            if (videoElement) videoElement.srcObject = videoStream;  
          }}  
          width="640"  
          height="480"  
        />  
      ) : (  
        <p>Loading Webcam...</p>  
      )}  
      <div>  
        <button onClick={startAnalysis}>Start Detection</button>  
        <button onClick={stopAnalysis}>Stop Detection</button>  
      </div>  
      <p>Status: {detectionState}</p>  
    </div>  
  );  
}  

export default App;