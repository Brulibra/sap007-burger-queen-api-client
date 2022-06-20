import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import Hall from "./pages/hall/hall";
import Kitchen from "./pages/kitchen/kitchen";
import Login from './pages/login & register/login';
import Register from './pages/login & register/register';
// import { getRole } from "./services/API/localStorage";
import PrivateRoute from "./components/priveteRoute/priveteRoute.jsx"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/hall"
          element={
            <PrivateRoute>
              <Hall />
            </PrivateRoute>
          } />
        <Route exact path="/kitchen"
          element={
            <PrivateRoute>
              <Kitchen />
            </PrivateRoute>}
        />
        <Route exact path="/" element={<Navigate replace to="/login" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
