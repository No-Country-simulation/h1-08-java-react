import Input from '../atoms/Input'
import { passwordValidation, defaultRequireValidation } from '../../validations/commonFormValidation';
import { Link } from 'wouter';
import PasswordInput from '../atoms/PasswordInput';

const LoginForm = ({ register, onSubmit, errors }) => {
    return (<>
        <form className="bg-[#AA80C9] bg-opacity-20 flex flex-col p-5 rounded-xl bg-green-light/20 backdrop-blur-2xl border-r-2 border-b-2 border-magenta shadow-lg shadow-magenta my-5">
            <Input
                register={register("doctorValidation", defaultRequireValidation)}
                error={errors.doctorValidation}
                label={"Documento de ID"}
                placeholder="Documento de ID"
            />

            <PasswordInput
                register={register("password", passwordValidation)}
                error={errors.password}
                label="Contraseña"
                placeholder="Contraseña"
                password
            />

            <Link href="/" className={"link text-center no-underline hover:underline text-magenta"}>
                ¿Has olvidado tu contraseña?
            </Link>
        </form>
        <button type="submit" className="btn bg-magenta text-orange hover:text-accent hover:bg-magenta capitalize" onClick={onSubmit}>ingresar</button>
    </>

    )
}

export default LoginForm