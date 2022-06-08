import "./inputTxt.css"
import "../../globalStyle/colors.css"

function InputTxt({type, name, maxLength, value, placeholder, onChange}) {
    return (
        <input
            className="InputTxt"
            type={type}
            onChange={onChange}
            name={name}
            maxLength={maxLength}
            value={value}
            placeholder={placeholder}
            required={true}
        >
        </input>
    )
}

export default InputTxt