import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Make sure App is imported
import './index.css'


const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
