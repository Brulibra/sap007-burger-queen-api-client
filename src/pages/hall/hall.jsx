import React from "react";
import "./hall.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"
import Footer from "../../components/footer/footer.jsx"
import ClickButon from "../../components/buttons&inputs/clickButton/clickButton";
import { logOut } from "../../services/API/localStorage";
import {useNavigate} from "react-router-dom";

function Hall() {

    const navigate = useNavigate()

    function exit(){
        logOut();
        navigate("/")
    }

    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <h1 className="welcome">Bem-vindo ao Burguer da Tia Nêda</h1>
            <h2 className="text">No momento estamos fechados
                <br />Confira o horário de funcionamento
            </h2>
            < ClickButon className="general-orange-button" txtBtn="Sair" onClick={exit} />
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
export default Hall