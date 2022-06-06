import "./clickButton.css"
import "../../globalStyle/colors.css"

function ClickButon({type, onClick, txtBtn}) {
    return (
        <button
            className="general-orange-button"
            type={type}
            onClick={onClick}
        >
            {txtBtn}
        </button>
    )
}

export default ClickButon