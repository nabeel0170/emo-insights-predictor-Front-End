import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your App component
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
