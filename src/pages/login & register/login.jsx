import React, { useState } from "react"
// import { useState } from "react";

import { Link } from "react-router-dom"

// import RadioButton from "../../components/radioButton/radioButton"
import ClickButon from "../../components/clickButton/clickButton"
import InputTxt from "../../components/inputTxt/inputTxt"
import LoggedUser from "../../services/validateLogin.jsx"

import "./login&register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form">
                {/* <section className="assign-role">
                    <label> <RadioButton name="role" value="waiter" /> Garçom </label>
                    <label> <RadioButton name="role" value="cooker" /> Cozinha </label>
                </section> */}
                <section className="information">
                    <label> Email:
                        <InputTxt
                            type="email"
                            name="email"
                            // value={userCredentials}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="email@exemplo.com"
                            required={true}
                        />
                    </label>
                    <label> Senha:
                        <InputTxt
                            type="password"
                            name="password"
                            // value={userCredentials}
                            onChange={setPassword}
                            placeholder="Até 8 caracteres"
                            maxLength="8"
                            required={true}
                        />
                    </label>
                </section>
                <div className="onClick-button">
                    <ClickButon className="general-orange-button" type="submit" onClick={LoggedUser(email, password)} txtBtn="Entrar" />
                </div>
                <p className="link-to">Não possuí cadastro?
                    <Link to="/register"> Crie um aqui!</Link>
                </p>
            </form>
        </div>
    )
}
console.log(LoggedUser)

export default Login