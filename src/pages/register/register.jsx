import React from "react"

import RadioButton from "../../components/RadioButton/RadioButton"
import ClickButon from "../../components/clickButton/clickButton"
import InputTxt from "../../components/InputTxt/InputTxt"

import "./register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Register() {
    return (
        <div className="login-page">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form-login">
                <section className="assign-role">
                    <label> <RadioButton name="role" value="waiter"/> Garçom </label>
                    <label> <RadioButton name="role" value="cooker"/> Cozinha </label>
                </section>
                <section className="login-information">
                <label> Nome:
                        <br/><InputTxt
                            type="text"
                            name="name"
                            placeholder="Nome Sobrenome"
                            required={true}
                        />
                    </label>
                    <br/>
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
                            maxlength="8"
                            required={true}
                        />
                    </label>
                    <label> Confirme a Senha:
                        <br/><InputTxt
                            type="password"
                            name="password"
                            placeholder="Confirme a senha"
                            maxlength="8"
                            required={true}
                        />
                    </label>
                </section>
            </form>
            <div className="onClick-button">
                <ClickButon className="general-orange-button" onClick="Registrar" txtBtn="Registrar"/>
            </div>
        </div>
    )
}



export default Register