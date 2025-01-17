import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/bootstrap.css";
import './i18n/i18n.js'; // Import the i18n configuration
// import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
