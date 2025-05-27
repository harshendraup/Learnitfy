import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
=======
>>>>>>> master
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
console.log('Rendering the application...');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
);
>>>>>>> feature/ui_updated
=======
);
>>>>>>> master
