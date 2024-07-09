import { useForm } from "react-hook-form"
import Input from '../atoms/Input'
import Person from '../../assets/icons/forms/person.svg';
import Group from '../../assets/icons/forms/group.svg';
import Call from '../../assets/icons/forms/call.svg';
import Lock from '../../assets/icons/forms/lock.svg';
import Email from '../../assets/icons/forms/mail.svg';
import Badge from '../../assets/icons/forms/badge.svg';

import { passwordValidation, emailValidation, namesValidation, defaultRequireValidation } from '../../validations/commonFormValidation';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    })

    return (
        // border  border-accent
        <form className="flex flex-col flex-wrap">
            <div className="flex justify-between gap-5">
                <Input
                    register={register("name", namesValidation)}
                    error={errors.name}
                    icon={Person}
                    alt={"name-icon"}
                    placeholder="Nombre/s"
                />

                <Input
                    register={register("lastName", namesValidation)}
                    error={errors.lastName}
                    icon={Group}
                    alt={"lastname-icon"}
                    placeholder={"Apellido/s"}
                />
            </div>

            <div className="flex justify-between gap-5">
                {/* <Input
                    register={register("type_document", defaultRequireValidation)}
                    error={errors.type_document}
                    icon={Badge}
                    alt={"badge-icon"}
                    placeholder="Tipo de documento"
                /> */}
                <Input
                    register={register("phone", defaultRequireValidation)}
                    error={errors.phone}
                    icon={Call}
                    alt={"phone-icon"}
                    placeholder={"Teléfono"}
                />

                <Input
                    register={register("document", defaultRequireValidation)}
                    error={errors.document}
                    icon={Badge}
                    alt={"badge-icon"}
                    placeholder="N° de documento de identidad"
                />
            </div>

            <div className="divider mt-1 mb-8"></div>

            <div className="flex justify-between gap-5">
                <Input
                    register={register("email", emailValidation)}
                    error={errors.email}
                    icon={Email}
                    alt={"email-icon"}
                    placeholder={"Correo electrónico"}
                />
                <Input
                    register={register("confirmEmail", emailValidation)}
                    error={errors.confirmEmail}
                    icon={Email}
                    alt={"email-confirm-icon"}
                    placeholder={"Confirmar correo electrónico"}
                />
            </div>

            <div className="flex justify-between gap-5">

                <Input
                    register={register("password", passwordValidation)}
                    error={errors.password}
                    icon={Lock}
                    alt={"lock-icon"}
                    placeholder="Contraseña"
                    password
                />

                <Input
                    register={register("confirmPassword", passwordValidation)}
                    error={errors.confirmPassword}
                    icon={Lock}
                    alt={"lock-icon"}
                    placeholder="Confirmar contraseña"
                    password
                />
            </div>

            <button type="submit" className="btn btn-accent capitalize mt-5" onClick={onSubmit}>Registrarme</button>
        </form>
    )
}

export default RegisterForm