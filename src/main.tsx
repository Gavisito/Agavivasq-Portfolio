import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your component file has a .tsx extension
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

