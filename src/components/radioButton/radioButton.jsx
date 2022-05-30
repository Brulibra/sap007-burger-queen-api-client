function RadioButton(props) {
    return (
        <input
            className="radioButton"
            type="radio"
            name={props.name}
            value={props.value}
        >
        </input>
    )
}

export default RadioButton