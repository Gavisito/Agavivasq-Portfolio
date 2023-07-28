import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx'; // Assuming your component file has a .tsx extension
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

