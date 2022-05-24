
import "./inputTxt.css"

function inputTxt(props) {
    return (
        <input
            className="inputTxt"
            type={props.text}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            required={props.required}
        >
        </input>
    )
}

export default inputTxt