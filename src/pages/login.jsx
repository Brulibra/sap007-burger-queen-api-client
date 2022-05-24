// import radioButton from "../components/radioButton/radioButton"
import ClickButon from "../components/clickButton/clickButton"
import inputTxt from "../components/inputTxt/inputTxt"
//importar img

function Login () {
    return (
        <>
        <form className="form-login">
            <inputTxt />
        </form>
        <div className="onClick-button">
            <ClickButon onClick="Entrar" />
        </div>
        </>
    )
}

export default Login