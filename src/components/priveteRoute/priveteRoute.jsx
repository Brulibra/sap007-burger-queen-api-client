import React from "react";
import { getRole } from "../../services/API/localStorage.jsx";
import {Navigate} from "react-router-dom";

function PriveteRoute (props) {
    const isAutenticated = getRole()
    return isAutenticated ? props.children : <Navigate to="/login" />
}

export default PriveteRoute