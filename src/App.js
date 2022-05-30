import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from './pages/loginPage/login';
import Register from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route exact path="/loginPage" element={<Login/>}></Route>
     <Route exact path="/register" element={<Register/>}></Route>
     <Route exact path="/" element={<Navigate replace to="/loginPage" />}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
