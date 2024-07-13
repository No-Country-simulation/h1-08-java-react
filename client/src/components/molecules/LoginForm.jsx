import Input from '../atoms/Input'
import { passwordValidation, defaultRequireValidation } from '../../validations/commonFormValidation';
import { Link } from 'wouter';
import PasswordInput from '../atoms/PasswordInput';

const LoginForm = ({ register, onSubmit, errors }) => {
    return (<>
        <form className="bg-[#AA80C9] bg-opacity-20 flex flex-col p-5 rounded-2xl login-shadow my-5">
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

            <Link href="/auth/forgot-password" className={"link text-center no-underline hover:underline text-magenta"}>
                ¿Has olvidado tu contraseña?
            </Link>
        </form>
        <button type="submit" className="btn bg-magenta text-orange hover:text-accent hover:bg-magenta capitalize" onClick={onSubmit}>ingresar</button>
    </>

    )
}

export default LoginForm