import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Style/Common.css"
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

