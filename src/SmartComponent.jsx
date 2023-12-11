export default ({ id, label, value, mode, options, inputValues, updateValues, objIndex }) => {
    return (
        <label>
            <h3>{label}</h3>
            {mode.startsWith('input') && !mode.includes('radio') && !mode.includes('checkbox') &&
                <input type={mode.substring(6)}
                    onChange={e => updateValues(e.target.value)}
                    value={inputValues[objIndex]}
                >
                </input>}
            {mode.includes('radio') &&
                <article className={id}>
                    {options.map((option, i) => {
                        return (
                            <label key={`${id}_${i}`}>
                                <h4>{option}</h4>
                                <input
                                    type={mode.substring(6)}
                                    name={id}
                                    onChange={e => updateValues(e.target.checked && option)}
                                ></input>
                            </label>
                        )

                    })}
                </article>
            }
            {mode.includes('select') &&
                <select
                    value={inputValues[objIndex]} 
                    onChange={e => updateValues(e.target.value)}>
                    {options.map((option, i) => {
                        return (
                            <option key={`clr${i}`}>
                                {option}
                            </option>
                        )
                    })}
                </select>}
            {mode.includes('checkbox') &&
                <input type={mode.substring(6)}
                    onChange={e => updateValues(e.target.checked)}
                    checked={inputValues[objIndex]}
                >
                </input>}
        </label>
    )
}