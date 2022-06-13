import React from "react"
import { Link } from "react-router-dom"

// import RadioButton from "../../components/radioButton/radioButton"
import ClickButon from "../../components/buttons&inputs/clickButton/clickButton"
import InputTxt from "../../components/buttons&inputs/inputTxt/inputTxt"
import LoggedUser from "../../services/loggedUser"
import Footer from "../../components/footer/footer"

import "./login&register.css"
import "../../globalStyle/colors.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"

function Login() {
    const { handleInputChange, loginSubmit, msgError } = LoggedUser();

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <form className="form" onSubmit={loginSubmit}>
                {/* <section className="assign-role">
                    <label> <RadioButton name="role" value="waiter" /> Garçom </label>
                    <label> <RadioButton name="role" value="cooker" /> Cozinha </label>
                </section> */}
                <section className="information">
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
                </section>
                <div className="onClick-button">
                    <ClickButon
                        className="general-orange-button"
                        type="submit"
                        txtBtn="Entrar"
                    />
                </div>
                <p className="link-to">Não possuí cadastro?
                    <Link to="/register"> Crie um aqui!</Link>
                </p>
                {msgError && (
                    <div className="error-container">
                        <p className="error-mensage">{msgError}</p>
                    </div>
                )}
            </form>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
export default Login