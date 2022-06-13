import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

import "./footer.css"

function Footer() {
    return (
        <div className="container-footer">
            <p className="developer">
                Desenvolvido por Bruna de Paula
                <a href="https://github.com/Brulibra" target="_blank" rel="noreferrer">
                <img className="github" src={github} alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/brunadpaula/" target="_blank" rel="noreferrer">
                <img className="linkedin" src={linkedin} alt=""></img>
                </a>
            </p>
        </div>
    )
}

export default Footer

//corrigir tamanho das imagens