import "./InputTxt.css"
import "../../globalStyle/colors.css"

function InputTxt(props) {
    return (
        <input
            className="InputTxt"
            type={props.type}
            name={props.name}
            maxlength={props.maxlength}
            value={props.value}
            placeholder={props.placeholder}
            required={true}
        >
        </input>
    )
}

export default InputTxt