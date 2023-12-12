export default ({ id, label, value, mode, options, updateValues }) => {

    const inputProps = {
        type: mode.substring(6),
        onChange: e => updateValues(e.target.value),
        [mode.includes('checkbox') ? 'value' : 'checked']: { value }
    }

    return (
        <label>
            <h3>{label}</h3>
            {mode.startsWith('input') && !mode.includes('radio') &&
                <input
                    {...inputProps}
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
                                    checked={value === option}
                                    onChange={e => updateValues(e.target.value)}
                                ></input>
                            </label>
                        )

                    })}
                </article>
            }
            {mode.includes('select') &&
                <select
                    value={value}
                    onChange={e => updateValues(e.target.value)}>
                    {options.map((option, i) => {
                        return (
                            <option value={option} key={`clr${i}`}>
                                {option}
                            </option>
                        )
                    })}
                </select>}
            {/* {mode.includes('checkbox') &&
                <input type={mode.substring(6)}
                    onChange={e => updateValues(e.target.checked)}
                    checked={value}
                >
                </input>} */}
        </label>
    )
}