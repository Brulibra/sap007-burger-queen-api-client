import "./inputTxt.css"
import "../../globalStyle/colors.css"

function InputTxt(props, {onChange}) {
    return (
        <input
            className="InputTxt"
            type={props.type}
            onChange={onChange}
            name={props.name}
            maxLength={props.maxLength}
            value={props.value}
            placeholder={props.placeholder}
            required={true}
        >
        </input>
    )
}

export default InputTxt