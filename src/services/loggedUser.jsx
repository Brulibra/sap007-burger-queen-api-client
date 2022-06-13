import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./API/api.jsx"
// import { tokenAndRole } from "../services/API/localStorage.jsx"

function LoggedUser() {

    const userCredentials = {
        email: "",
        password: "",
    }

    const [credentials, setCredentials] = useState({ userCredentials });

    const [msgError, setMsgError] = useState("")

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        loginUser(credentials).then((res) => {
            switch (res.status) {
                case 200: console.log("logou")
                    return res.json()
                case 400: setMsgError("Email e/ou Senha inválidos")
                    break
                default: setMsgError("Algo deu errado, tente novamente mais tarde...")
            }
        })
            .then((data) => {
                console.log(data.role)
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.role);
                navigate("/main")

            })
    }
    return { handleInputChange, loginSubmit, msgError }
}
export default LoggedUser