// src/main.jsx (أو src/index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // تأكد أن المسار هنا يشير إلى App.jsx

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
);
