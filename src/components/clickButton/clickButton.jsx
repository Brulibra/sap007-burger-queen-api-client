import "./clickButton.css"
import "../../globalStyle/colors.css"

function ClickButon(props) {
    return (
        <button
            className="general-orange-button"
            type={props.type}
            onClick={props.onClick}
        >
            {props.txtBtn}
        </button>
    )
}

export default ClickButon