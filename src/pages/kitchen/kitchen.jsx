import React from "react";
import "./kitchen.css"

import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"
import Footer from "../../components/footer/footer.jsx"
import ClickButon from "../../components/buttons&inputs/clickButton/clickButton";
import { logOut } from "../../services/API/localStorage.jsx"
import { useNavigate } from "react-router-dom"

function Kitchen() {
    const navigate = useNavigate()

    function exit() {
        logOut()
        navigate("/")
    }

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <h1 className="welcome-kitchen">Bem-vindo à Cozinha do Burguer da Tia Nêda</h1>
            <h2 className="text-kitchen">No momento estamos fechados
                <br />Confira o horário de funcionamento
            </h2>
            <ClickButon className="general-orange-button" txtBtn="Sair" onClick={exit} />
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
export default Kitchen