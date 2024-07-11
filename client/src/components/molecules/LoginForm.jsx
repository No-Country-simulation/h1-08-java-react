import Input from '../atoms/Input'
import Email from '../../assets/icons/forms/mail.svg';
import Lock from '../../assets/icons/forms/lock.svg';
import { passwordValidation, emailValidation } from '../../validations/commonFormValidation';

const LoginForm = ({register, onSubmit, errors }) => {
    return (
        // border  border-accent
        <form className="flex flex-col gap-1">
            <div>
                <Input
                    register={register("email", emailValidation)}
                    error={errors.email}
                    icon={Email}
                    alt={"person-icon"}
                    placeholder="Email"
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