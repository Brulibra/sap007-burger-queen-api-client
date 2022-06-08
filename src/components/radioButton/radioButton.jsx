function RadioButton({ name, value, onChange}) {
    return (
        <input
            className="radioButton"
            type="radio"
            name={name}
            onChange={onChange}
            value={value}
            required={true}
        >
        </input>
    )
}

export default RadioButton