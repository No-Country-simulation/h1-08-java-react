import { defaultRequireValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import { useForm } from "react-hook-form"
import SubmitButton from "../atoms/SubmitButton"


const fields = Object.freeze([
  { label: "Provincia", name: "country" },
  { label: "Localidad", name: "locality" },
  { label: "Dirección", name: "address" },
  { label: "Fecha de nacimiento", placeholder: "DD/MM/YYYY", name: "birthdate" },
  { label: "Tipo de sangre", name: "blood_type" },
  { label: "Médico general", placeholder: "Nombre y Apellido", name: "general_practitioner" },
  { label: "Prepaga / obra social", name: "health_service" },
  { label: "Plan", name: "plan" },
  { label: "Patologías", placeholder: "Ej. Alergías, migrañas, etc.", name: "pathologies" },

])

const ProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data);
  })


  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center w-fit mx-auto mt-5 mb-10">
      {fields.map(({ label, placeholder, name }) => (
        <Input
          key={name}
          label={label}
          placeholder={placeholder ?? label}
          register={register(name, defaultRequireValidation)}
          error={errors[name]}
        />
      ))}

      <SubmitButton
        addClassName={"col-span-full mt-5"}
        onClick={onSubmit}>
        guardar
      </SubmitButton>


    </form>
  )
}

export default ProfileForm