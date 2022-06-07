import { useState } from "react";
import { userCreate } from "./apiUser.jsx"
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        setMsgError("")
        if (!/\S+@\S+\.\S+/.test(credentials.email)) {
            console.log("não é email")
        // } else if (credentials.password !== credentials.checkpassword) {
        //     console.log("as senhas não batem")
        } else {
            userCreate(credentials).then((res) => {
                switch (res.status) {
                    case 200: console.log("conseguiu")
                        break
                    case 403: setMsgError("Email já foi cadastrado")
                        break
                    default: console.log("Não deu :c")
                }
            })
                .then((data) => {
                    console.log(data)
                    localStorage.setItem("token", data.token)
                })
        }
    }
    return { handleInputChange, submit, msgError }
}
export default ValidateRegister

// ana@email.com -> email já cadastrado para teste