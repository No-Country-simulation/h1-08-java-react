
const Select = ({ options, label, register, children, column, isDisabled }) => {
    return (
        <div className={`flex justify-between gap-${children ? 1 : !column && 5} 
        ${column ? "flex-col" : "items-center col-span-full"} w-full`}>
            {label &&
                <label className="label text-lg">
                    {label}
                </label>
            }

            <div className="form-control">
                <select
                    disabled={isDisabled ?? false}
                    className={`mx-auto
                        select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-${!column ? "full" : "[310px]"} text-lg ${children ? "pe-8" : ""}
                        `}
                    {...register}
                    defaultValue={options?.find(option => option.isDefaultChecked)?.value || options[0].value}
                >
                    {options && options.map((item, i) => (
                        <option
                            key={i}
                            disabled={item.isDefaultChecked ?? false}
                            value={item.value}>
                            {item.name ?? item.value}
                        </option>
                    ))}
                </select>
            </div>

            {children &&
                <div className="w-[calc(100%-100px)]">
                    {children}
                </div>
            }
        </div>
    )
}

export default Select