
const Select = ({ options, label, register }) => {
    return (
        <div className="flex items-center">
            <div className="w-2/4 items-center">
                <label className="label">
                    {label}
                </label>
            </div>

            <div className="form-control w-2/4">
                <select className="select select-accent w-full max-w-xs" {...register}>
                    {options && options.map((item, i) => (
                        <option key={i} value={item.value}>{item.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select