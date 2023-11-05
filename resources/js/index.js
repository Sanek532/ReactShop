require('./bootstrap');
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app'
import '../css/app.css';



const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App />);

