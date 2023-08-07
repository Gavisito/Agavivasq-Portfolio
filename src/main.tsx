import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App.tsx'; // Assuming your component file has a .tsx extension
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement); // Use createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
