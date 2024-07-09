import { useForm } from "react-hook-form"
import Input from '../atoms/Input'
import Person from '../../assets/icons/forms/person.svg';
import Lock from '../../assets/icons/forms/lock.svg';
import { usernameValidation, passwordValidation } from '../../validations/commonFormValidation';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    })

    return (
        // border  border-accent
        <form className="flex flex-col gap-1">
            <div>
                <Input
                    register={register("username", usernameValidation)}
                    error={errors.username}
                    icon={Person}
                    alt={"person-icon"}
                    placeholder="Usuario"
                />

                <Input
                    register={register("password", passwordValidation)}
                    error={errors.password}
                    icon={Lock}
                    alt={"lock-icon"}
                    placeholder="Contraseña"
                    password
                />
            </div>

            <button type="submit" className="btn btn-accent capitalize" onClick={onSubmit}>ingresar</button>
        </form>
    )
}

export default LoginForm