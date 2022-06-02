function RadioButton(props, {onClick}) {
    return (
        <input
            className="radioButton"
            type="radio"
            name={props.name}
            onClick={onClick}
            value={props.value}
        >
        </input>
    )
}

export default RadioButton