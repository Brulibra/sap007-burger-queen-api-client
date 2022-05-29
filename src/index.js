import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import Login from './pages/loginPage/login';

import "../src/globalStyle/index.css"
import "../../globalStyle/colors.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>
);