import React from "react"

import { Link } from "react-router-dom"

import RadioButton from "../../components/radioButton/radioButton.jsx"
import ClickButon from "../../components/clickButton/clickButton.jsx"
import InputTxt from "../../components/inputTxt/inputTxt.jsx"
import ValidateRegister from "../../services/validateRegister.jsx"

import "./login&register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Register() {
    const {handleInputChange, submit, msgError} = ValidateRegister();

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form" onSubmit={submit}>
                <section className="assign-role">
                    <label> <RadioButton
                        name="role"
                        value="waiter"
                        onChange={handleInputChange}
                        required={true}
                    /> Garçom </label>
                    <label> <RadioButton
                        name="role"
                        value="cooker"
                        onChange={handleInputChange}
                        required={true}
                    /> Cozinha </label>
                </section>
                <section className="information">
                    <label> Nome:
                        <InputTxt
                            type="text"
                            name="name"
                            placeholder="Nome Sobrenome"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                    <label> Email:
                        <InputTxt
                            type="text"
                            name="email"
                            placeholder="email@exemplo.com"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                    <label> Senha:
                        <InputTxt
                            type="password"
                            name="password"
                            placeholder="Até 8 caracteres"
                            maxLength="8"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                    <label> Confirme a Senha:
                        <InputTxt
                            type="password"
                            name="checkpassword"
                            placeholder="Confirme a senha"
                            maxLength="8"
                            onChange={handleInputChange}
                            required={true}
                        />
                    </label>
                </section>
                <div className="onClick-button">
                    <ClickButon
                        className="general-orange-button"
                        type="submit"
                        txtBtn="Registrar"
                    />
                </div>
                <p className="link-to">Já possuí um cadastro?
                    <Link className="link-to-register" to="/login">Entre aqui!</Link>
                </p>
                <div>
                    <p className="error-mensage">{msgError}</p>
                </div>
            </form>
        </div>
    )
}

export default Register