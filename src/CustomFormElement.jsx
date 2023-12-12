export default ({ id, label, value, mode, options, inputValues, updateValues, objIndex }) => {
    switch (mode) {
        case 'input-text':
            return (
                <label>
                    <h3>{label}</h3>
                    <input
                        type="text"
                        value={value}
                        onChange={e => updateValues(e.target.value)}
                    />
                </label>
            )
        case 'input-email':
            return (
                <label>
                    <h3>{label}</h3>
                    <input
                        type="email"
                        value={value}
                        onChange={e => updateValues(e.target.value)}
                    />
                </label>
            )
        case 'input-password':
            return (
                <label>
                    <h3>{label}</h3>
                    <input
                        type="password"
                        value={value}
                        onChange={e => updateValues(e.target.value)}
                    />
                </label>
            )
        case 'input-radio':
            return (
                <article>
                    <h3>{label}</h3>
                    <div className={'gender'}>
                        {options.map((option, i) => {
                            return (
                                <label key={i}>
                                    <h4>{option}</h4>
                                    <input type="radio" name="gender"
                                        onChange={e => updateValues(e.target.checked && option)} />
                                </label>
                            )
                        })}
                    </div>
                </article>
            )
        case "select":
            return (
                <label>
                    <h3>{label}</h3>
                    <select
                        onChange={e => updateValues(e.target.value)}
                        defaultValue={options[0]}>
                        {options.map((option, i) => {
                            return (
                                <option value = {option} key={`clr${i}`}>
                                    {option}
                                </option>
                            )
                        })}
                    </select>
                </label>

            )
        case "input-checkbox":
            return (
                <label>
                    <h3>{label}</h3>
                    <input type="checkbox"
                        onChange={e => updateValues(e.target.checked)}
                        checked={value} />
                </label>
            )
    }
}

