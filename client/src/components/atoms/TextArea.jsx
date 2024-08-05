import microphone from "../../assets/input/microphone.svg"


const TextArea = ({ label, children, register, placeholder }) => {

    return (
        <label className="form-control font-poppins mb-5">
            {
                label
                    ? <div className="label">
                        <span className="label-text text-xl font-medium">{label}</span>
                    </div>
                    : children
            }
            <div className="h-min w-11/12 md:w-10/12 mx-auto relative">
                <textarea
                    {...register}
                    className="textarea textarea-secondary rounded-md min-h-24 w-full shadow-xl pb-9"
                    placeholder={placeholder}
                    autoComplete="off"
 
                >
                </textarea>
                <button
                    type="button" 
                    className={`absolute bottom-4 right-2 p-2 rounded-md border border-secondary `}>
                    <img
                        width={18}
                        height={24}
                        src={microphone}
                        alt="speak-microphone"
                        className="h-4 w-4"
                    />
                </button>
            </div>

        </label>
    )
}

export default TextArea