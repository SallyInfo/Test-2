import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollUp from "././components/custom/ScrollUp.jsx";


import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollUp />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
