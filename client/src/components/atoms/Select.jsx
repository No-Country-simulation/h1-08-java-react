
const Select = ({ options, label, register, children }) => {
    return (
        <div className={`flex justify-between gap-${children ? 1 : 5} items-center col-span-full w-full`}>
            {label &&
                <label className="label text-xl">
                    {label}
                </label>
            }

            <div className="form-control">
                <select
                    className={`
                        select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-full text-lg ${children ? "pe-8" : ""}
                        `}
                    {...register}>
                    {options && options.map((item, i) => (
                        <option key={i} value={item.value}>{item.name ?? item.value}</option>
                    ))}
                </select>
            </div>

            {children && children}
        </div>
    )
}

export default Select