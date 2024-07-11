import Input from '../atoms/Input'
import { passwordValidation, emailValidation } from '../../validations/commonFormValidation';
import { Link } from 'wouter';

const LoginForm = ({ register, onSubmit, errors }) => {
    return (<>
        <form className="flex flex-col gap-4 py-2 px-5 rounded-xl bg-green-light/20 backdrop-blur-2xl border-r-2 border-b-2 border-orange my-5">
            <Input
                register={register("email", emailValidation)}
                error={errors.email}
                label={"Documento de ID"}
                placeholder="Documento de ID"
            />

            <Input
                register={register("password", passwordValidation)}
                error={errors.password}
                label="Contraseña"
                placeholder="Contraseña"
                password
            />
            <Link href="/" className={"link text-center no-underline"}>
                ¿Has olvidado tu contraseña?
            </Link>
        </form>
        <button type="submit" className="btn bg-magenta text-orange hover:text-accent hover:bg-magenta capitalize" onClick={onSubmit}>ingresar</button>
    </>

    )
}

export default LoginForm