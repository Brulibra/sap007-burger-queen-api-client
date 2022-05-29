import "./clickButton.css"
import "../../globalStyle/colors.css"

function ClickButon (props) {
    return (
        <button className="general-orange-button">{props.onClick}</button>
    )
}

export default ClickButon