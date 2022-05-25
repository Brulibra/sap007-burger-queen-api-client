import "./InputTxt.css"

function InputTxt(props) {
    return (
        <input
            className="InputTxt"
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            required={true}
        >
        </input>
    )
}

export default InputTxt