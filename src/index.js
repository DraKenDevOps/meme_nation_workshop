import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// UI
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/fontawesome-free-5.15.4-web/css/all.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
