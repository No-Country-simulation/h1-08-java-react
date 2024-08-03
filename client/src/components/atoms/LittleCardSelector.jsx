
const LittleCardSelector = ({ isDisabled, originalValue, isSelector, options, label, inputName, register, watch, addClassName, type, isOnlyText, placeholder }) => {
    const inputClass = "text-xl text-center font-bold bg-transparent h-full"
    const value = watch(inputName, originalValue ?? "");

    return (
        <div
            className={`form-control h-[100px] w-[48%] md:w-[32%] bg-light shadow-secondary border border-orange p-3 rounded-xl hover:border-secondary hover:shadow-secondary ${addClassName} ${isDisabled && "is-input-disabled"}`}>
            <label className="label-text w-full text-poppins text-lg">
                {label}
            </label>

            {isSelector
                ?
                <select disabled={isDisabled} style={{ border: "none", outline: "none" }} className={inputClass} {...register(inputName)}>
                    {options && options.map((item, i) => (
                        <option key={i} value={item.value ?? item} className="bg-orange/70">
                            {item.name ?? item.value ?? item}
                        </option>
                    ))}
                </select>
                :
                <input value={isOnlyText ? originalValue : value} autoComplete="off" disabled={isDisabled} type={type ?? "text"} style={{ border: "none", outline: "none" }} placeholder={placeholder} className={`${inputClass} ${isDisabled && "cursor-not-allowed"}`}
                    {...register(inputName)} />
            }

        </div>
    )
}

export default LittleCardSelector