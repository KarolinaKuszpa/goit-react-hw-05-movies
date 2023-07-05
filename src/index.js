import React from 'react';

import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
