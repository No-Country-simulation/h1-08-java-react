
const Select = ({ options, icon, alt, label, register }) => {
    return (
        <div className="flex justify-between items-center mt-1 mb-5">
            <div className="w-3/6 flex justify-center items-center text-center">
                <img src={icon} alt={alt} className="opacity-70" />
                <label className="label">
                {label}
                </label>
            </div>

            <div className="form-control w-full">
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