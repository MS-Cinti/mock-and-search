import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mockServer from './mockServer';
import Book from './components/Book';
import LoadingMask from './components/LoadingMask';

mockServer()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
