import { defaultRequireValidation, emailValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import { useForm } from 'react-hook-form'
import SubmitButton from "../atoms/SubmitButton"


const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    })

    return (
        <form className="mx-auto max-w-[420px] w-11/12 py-10 mt-5 mb-10">
            <img src="/logo-text.webp" width={"300px"} height={"251px"} alt="logo-justina.io-icon" className="mx-auto" />


            <div className="bg-[#AA80C9] bg-opacity-20 flex flex-col py-12 px-5 rounded-2xl login-shadow my-10 w-full">
                <h1 className="text-2xl">¿Olvidaste tu contraseña?</h1>
                <p className="font-roboto leading-7 px-1 text-lg my-5 text-black"> No te preocupes. Pon tu email o teléfono y te enviaremos un código con el que podrás recuperar tu contraseña.</p>
                <Input placeholder="Email o teléfono"
                    label={"Email o teléfono"}
                    error={errors.recover_password}
                    register={register("recover_password", defaultRequireValidation)}
                />
            </div>

            <div className="flex justify-evenly items-center">
                <button type="button"
                    className={"text-xl font-normal font-poppins px-5 btn btn-outline text-magenta border-magenta hover:text-accent hover:border-accent hover:bg-transparent capitalize"}
                    onClick={() => window.history.back()}
                >
                    cancelar
                </button>

                <SubmitButton
                    onClick={onSubmit}
                    addClassName={"text-xl font-normal font-poppins px-5"}
                >
                    enviar código
                </SubmitButton>
            </div>

        </form>
    )
}

export default ForgotPassword