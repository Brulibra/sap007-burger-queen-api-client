import React from "react"

import RadioButton from "../../components/RadioButton/RadioButton"
import ClickButon from "../../components/clickButton/clickButton"
import InputTxt from "../../components/InputTxt/InputTxt"

import "./login.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Login() {
    return (
        <div className="login-page">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form-login">
                <section className="assign-role">
                    <label> <RadioButton /> Garçom </label>
                    <label><RadioButton /> Cozinha </label>
                </section>
                <section className="login-information">
                    <label> Email:
                        <br/><InputTxt
                            type="email"
                            name="email"
                            placeholder="email@exemplo.com"
                            required={true}
                        />
                    </label>
                    <br/>
                    <label> Senha:
                        <br/><InputTxt
                            type="password"
                            name="password"
                            placeholder="Até 8 caracteres"
                            required={true}
                        />
                    </label>
                </section>
            </form>
            <div className="onClick-button">
                <ClickButon onClick="Entrar" />
            </div>
        </div>
    )
}



export default Login