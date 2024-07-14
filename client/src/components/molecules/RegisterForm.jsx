import Input from '../atoms/Input'
import {
    passwordValidation,
    confirmPasswordValidation,
    emailValidation,
    namesValidation,
    defaultRequireValidation
} from '../../validations/commonFormValidation';
import Select from "../atoms/Select";
import PasswordInput from "../atoms/PasswordInput";
import SubmitButton from '../atoms/SubmitButton';

const RegisterForm = ({ register, onSubmit, watch, errors }) => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">

            <Select
                label={"Tipo de usuario:"}
                register={register("role", defaultRequireValidation)}
                options={[{ name: "Paciente", value: "patient" }, { name: "Médico", value: "doctor" }]}
            />
            {
                watch("role") == "doctor" && [<Input
                    register={register("specialty", defaultRequireValidation)}
                    error={errors.specialty}
                    label={"Especialidad"}
                    placeholder={"Especialidad"}
                    key={"speciality-form"}
                />,
                <Input
                    register={register("doctorValidation", defaultRequireValidation)}
                    error={errors.doctorValidation}
                    label={"N° de matricula"}
                    placeholder={"N° de matricula"}
                    key={"doctorValidation-form"}
                />]
            }


            <Input
                register={register("name", namesValidation)}
                error={errors.name}
                label="Nombre/s"
                placeholder="Nombre/s"
            />

            <Input
                register={register("lastName", namesValidation)}
                error={errors.lastName}
                label={"Apellido/s"}
                placeholder={"Apellido/s"}
            />

            <Input
                register={register("email", emailValidation)}
                error={errors.email}
                label={"Correo electrónico"}
                placeholder={"ej: justina.io@gmail.com"}
            />

            <Input
                register={register("document", defaultRequireValidation)}
                error={errors.document}
                label="Documento de ID"
                placeholder="#número"
            />

            <Input
                register={register("phone", defaultRequireValidation)}
                error={errors.phone}
                label={"Teléfono / Celular"}
                placeholder={"Teléfono"}
            />


            <Input
                register={register("country", defaultRequireValidation)}
                error={errors.document}
                label="País"
                placeholder="País"
            />

            <PasswordInput
                register={register("password", passwordValidation)}
                error={errors.password}
                label="Contraseña"
                placeholder="Contraseña"
            />

            <PasswordInput
                register={register("confirmPassword", confirmPasswordValidation(watch))}
                error={errors.confirmPassword}
                label="Repetir contraseña"
                placeholder="Repetir contraseña"
            />

            <div className="col-span-full flex flex-col items-center">
                <div className="form-control w-fit">
                    <label className="label cursor-pointer flex items-center gap-1">
                        <input type="checkbox" defaultChecked
                            className="checkbox checkbox-xs checkbox-secondary"
                            {...register("terms_conditions", defaultRequireValidation)}
                        />

                        <small className="label-text text-center ">
                            Acepto los términos y política de privacidad
                        </small>
                    </label>
                </div>

                <SubmitButton
                    addClassName={"mt-4 w-[306px]"}
                    onClick={onSubmit}
                >
                    crear cuenta
                </SubmitButton>
            </div>

        </form>
    )
}

export default RegisterForm