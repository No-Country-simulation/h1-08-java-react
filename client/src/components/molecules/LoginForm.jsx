import { passwordValidation, defaultRequireValidation } from '../../validations/commonFormValidation';
import { Link } from 'wouter';
import PasswordInput from '../atoms/PasswordInput';
import SubmitButton from '../atoms/SubmitButton';
import IDfields from './IDFields';

const LoginForm = ({ register, onSubmit, errors }) => {
    return (<>
        <form className="flex flex-col gap-3">
            <div className="bg-[#AA80C9] bg-opacity-20 p-5 rounded-2xl login-shadow my-5">
                <IDfields
                    registerType={register("document_type")}
                    registerID={register("document_id", defaultRequireValidation)}
                    error={errors.document_id}
                />

                <PasswordInput
                    register={register("password", passwordValidation)}
                    error={errors.password}
                    label="Contraseña"
                    placeholder="Contraseña"
                    password
                />

                <div className="text-center mt-2">
                    <Link href="/auth/recuperar-cuenta" className={"link no-underline hover:underline text-magenta"}>
                        ¿Has olvidado tu contraseña?
                    </Link>
                </div>
            </div>
            <SubmitButton
                onClick={onSubmit}>
                ingresar
            </SubmitButton>
        </form>
    </>

    )
}

export default LoginForm