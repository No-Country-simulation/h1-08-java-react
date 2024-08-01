
const LittleCardSelector = ({ isSelector, label, inputName, register }) => {
    return (
        <div className="form-control h-[100px] w-[160px] bg-light shadow-secondary border border-orange p-3 rounded-xl hover:border-secondary hover:shadow-secondary">
            <label className="label-text w-full text-poppins text-lg">
                {label}
            </label>

            <input type="text" style={{border:"none", outline:"none"}} className="text-3xl text-center font-bold bg-transparent h-full" />

        </div>
    )
}

export default LittleCardSelector