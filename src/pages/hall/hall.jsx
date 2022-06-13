import React from "react";
import "./hall.css"
import logoBurguerTiaNena from "../../images/logoBurguerTiaNena.png"
import Footer from "../../components/footer/footer.jsx"

function Hall() {
    return (
        <div className="container">
            <div className="logo-image">
                <img className="logo-image" src={logoBurguerTiaNena} alt="logo"></img>
            </div>
            <h1 className="welcome">Bem-vindo ao Burguer da Tia Nêda</h1>
            <h2 className="text">No momento estamos fechados
                <br />Confira o horário de funcionamento
            </h2>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
export default Hall