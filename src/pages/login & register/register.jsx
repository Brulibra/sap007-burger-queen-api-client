import React, { useState } from "react"

import { Link } from "react-router-dom"

import RadioButton from "../../components/radioButton/radioButton.jsx"
import ClickButon from "../../components/clickButton/clickButton.jsx"
import InputTxt from "../../components/inputTxt/inputTxt.jsx"
import ValidateRegister from "../../services/validateRegister.jsx"

import "./login&register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Register() {
    const [role, setRole] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkpassword, setCheckpassword] = useState("")
    // const [msgError, setMsgError] = useState("")
    const {validations} = ValidateRegister;

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form">
                <section className="assign-role">
                    <label> <RadioButton
                        name="role"
                        value="waiter"
                        onChange={(e) => setRole(e.target.value)}
                        required={true}
                    /> Garçom </label>
                    <label> <RadioButton
                        name="role"
                        value="cooker"
                        onChange={(e) => setRole(e.target.value)}
                        required={true}
                    /> Cozinha </label>
                </section>
                <section className="information">
                    <label> Nome:
                        <InputTxt
                            type="text"
                            name="name"
                            placeholder="Nome Sobrenome"
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label> Email:
                        <InputTxt
                            type="email"
                            name="email"
                            placeholder="email@exemplo.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label> Senha:
                        <InputTxt
                            type="password"
                            name="password"
                            placeholder="Até 8 caracteres"
                            maxLength="8"
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label> Confirme a Senha:
                        <InputTxt
                            type="password"
                            name="password"
                            placeholder="Confirme a senha"
                            maxLength="8"
                            onChange={(e) => setCheckpassword(e.target.value)}
                            required={true}
                        />
                    </label>
                </section>
                <div className="onClick-button">
                    <ClickButon
                        className="general-orange-button"
                        type="submit"
                        onClick={() => { ValidateRegister(role, name, email, password, checkpassword)}}
                        onSubmit={() =>{validations()}}
                        txtBtn="Entrar"
                    />
                </div>
                <p className="link-to">Já possuí um cadastro?
                    <Link className="link-to-register" to="/login"> Entre aqui!</Link>
                </p>
                {/* <div>
                    <p className="error-mensage">{setMsgError}</p>
                </div> */}
            </form>
        </div>
    )
}



export default Register