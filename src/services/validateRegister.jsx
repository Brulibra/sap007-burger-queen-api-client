import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCreate } from "./API/api.jsx"

function ValidateRegister() {

    const registerCredentials = {
        name: "",
        email: "",
        password: "",
        checkpassword: "",
        role: "",
    }

    const [credentials, setCredentials] = useState({ registerCredentials });

    const [msgError, setMsgError] = useState("")

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        setMsgError("")

        if (credentials.password !== credentials.checkpassword) {
            setMsgError("as senhas não batem")
        } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
            setMsgError("não é email")
        } else {
            userCreate(credentials).then((res) => {
                switch (res.status) {
                    case 200: console.log("conseguiu")
                    return res.json()
                    case 403: setMsgError("Email já foi cadastrado")
                        break
                        default: setMsgError("Algo deu errago, tente novamente mais tarde...")
                }
            })
                .then((data) => {
                    console.log(data)
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("role", data.role)
                    navigate("/main")
                })
        }
    }
    return { handleInputChange, submit, msgError }
}
export default ValidateRegister

