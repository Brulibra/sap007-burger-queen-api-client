import React from "react"

import { Link } from "react-router-dom"

// import RadioButton from "../../components/radioButton/radioButton"
import ClickButon from "../../components/clickButton/clickButton"
import InputTxt from "../../components/inputTxt/inputTxt"
import LoggedUser from "../../services/validateLogin.jsx"

import "./login&register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Login() {
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
                        <br /><InputTxt
                            type="email"
                            name="email"
                            placeholder="email@exemplo.com"
                            required={true}
                        />
                    </label>
                    <br />
                    <label> Senha:
                        <br /><InputTxt
                        onChange={LoggedUser}
                            type="password"
                            name="password"
                            placeholder="Até 8 caracteres"
                            maxLength="8"
                            required={true}
                        />
                    </label>
                </section>
                <div className="onClick-button">
                    <ClickButon className="general-orange-button" type="submit" txtBtn="Entrar" />
                </div>
                <p className="link-to">Não possuí cadastro?
                    <Link to="/register"> Crie um aqui!</Link>
                </p>
            </form>
        </div>
    )
}



export default Login