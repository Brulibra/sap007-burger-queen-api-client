import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from './pages/login & register/login';
import Register from './pages/login & register/register';

function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route exact path="/login" element={<Login/>}></Route>
     <Route exact path="/register" element={<Register/>}></Route>
     <Route exact path="/" element={<Navigate replace to="/login" />}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
