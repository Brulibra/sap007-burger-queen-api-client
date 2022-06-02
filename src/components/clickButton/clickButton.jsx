import "./clickButton.css"
import "../../globalStyle/colors.css"

function ClickButon(props, {onClick}) {
    return (
        <button
            className="general-orange-button"
            type={props.type}
            onClick={onClick}
        >
            {props.txtBtn}
        </button>
    )
}

export default ClickButon