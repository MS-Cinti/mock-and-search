import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mockServer from './mockServer';

mockServer()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
