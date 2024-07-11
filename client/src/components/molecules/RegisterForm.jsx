import { useForm } from "react-hook-form"
import Input from '../atoms/Input'

import { passwordValidation, emailValidation, namesValidation, defaultRequireValidation } from '../../validations/commonFormValidation';
import Select from "../atoms/Select";

const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors, } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    })

    return (
        // border  border-accent
        <form className="flex flex-col flex-wrap gap-5">
            <Select
                label={"Tipo de usuario:"}
                register={register("role", defaultRequireValidation)}
                options={[{ name: "Paciente", value: "patient" }, { name: "Médico", value: "doctor" }]}
            />
            {
                watch.apply(watch, ["role"]) == "doctor" && <div className="flex justify-between gap-5">
                    <Input
                        register={register("specialty", defaultRequireValidation)}
                        error={errors.specialty}
                        label={"Especialidad"}
                        placeholder={"Especialidad"}
                    />
                    <Input
                        register={register("doctorValidation", defaultRequireValidation)}
                        error={errors.doctorValidation}
                        label={"N° de matricula"}
                        placeholder={"N° de matricula"}
                    />
                </div>
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
                placeholder={"Correo electrónico"}
            />

            <Input
                register={register("document", defaultRequireValidation)}
                error={errors.document}
                label="Documento de ID"
                placeholder="Documento de ID"
            />

            <Input
                register={register("phone", defaultRequireValidation)}
                error={errors.phone}
                label={"Teléfono"}
                placeholder={"Teléfono"}
            />


            <Input
                register={register("country", defaultRequireValidation)}
                error={errors.document}
                label="País"
                placeholder="País"
            />

            <Input
                register={register("password", passwordValidation)}
                error={errors.password}
                label="Contraseña"
                placeholder="Contraseña"
                password
            />

            <Input
                register={register("confirmPassword", passwordValidation)}
                error={errors.confirmPassword}
                label="Repetir contraseña"
                placeholder="Repetir contraseña"
                password
            />

            <div className="form-control">
                <label className="label cursor-pointer flex justify-between">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" />

                    <small className="label-text text-right">
                        Acepto los términos y política de privacidad
                    </small>
                </label>
            </div>
            <button type="submit" className="btn btn-accent capitalize mt-5" onClick={onSubmit}>Crear cuenta</button>
        </form>
    )
}

export default RegisterForm