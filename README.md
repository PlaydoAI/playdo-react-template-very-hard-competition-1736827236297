# epilepsi detection using webcam

## Project Overview
1. PROJECT OVERVIEW
- **Brief description of what the app does**:  
  This React application enables real-time epileptic seizure detection using a webcam. It leverages the webcam feed, processes the video input using a machine learning model, and identifies behaviors or patterns indicative of epilepsy. Users can start, stop, and monitor feed analysis in real-time, with visual notifications for alerts.  
- **Key features and functionality**:  
  - Video streaming via the webcam.  
  - Real-time epilepsy detection using a pre-trained TensorFlow.js model.  
  - Visual alerts upon identifying seizure patterns.  
  - Lightweight, responsive UI for ease of use across devices.  
  - Performance tracking through basic logs.  
- **Main technologies used**:  
  - React (Front-end UI)  
  - TensorFlow.js (Real-time machine learning computation)  
  - HTML5 Video APIs (Access webcam feed)  
  - Styled-components for UI styling  

---

2. DEVELOPMENT INSTRUCTIONS
- **How to run and test the application**:  
  1. Clone the repository.  
  2. Install dependencies with `npm install`.  
  3. Start the development server using `npm start`.  
  4. Open your browser and access `http://localhost:3000`.  
  5. To test the webcam capabilities, allow browser permissions for the webcam.  
  6. Use mock seizure input datasets to validate detection accuracy.  

- **Key files and their purposes**:  
  - `src/App.js`: Main component for rendering the app and managing logic.  
  - `src/index.js`: Entry point connecting App to the DOM.  
  - `src/App.css`: Styling for the application.  
  - `public/index.html`: Template for the app rendered in the browser.  

- **Any important configuration needed**:  
  - Ensure your browser has permissions to access the webcam.  
  - Provide a compatible pre-trained TensorFlow.js model for detection.  
  - Use SSL (HTTPS) in production to access `navigator.mediaDevices`.  

---