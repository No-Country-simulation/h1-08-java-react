import { defaultRequireValidation, emailValidation, phoneValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import { useForm } from "react-hook-form"
import SubmitButton from "../atoms/SubmitButton"
import RegionSelected from "./RegionSelected"
import Select from "../atoms/Select"


const type_plan = Object.freeze([
  { name: "Tipo de cobertura médica", value: 0, isDefaultChecked: true },
  { name: "Prepaga", value: 1 },
  { name: "Obra Social", value: 2 },
  { name: "Sin cobertura", value: 3 },
])

const planFields = Object.freeze([
  { label: "Nombre", placeholder: "Nombre de su cobertura", name: "plan_name", value: "Osde" },
  { label: "Número de afiliado", placeholder: "Número de afiliado", name: "plan_member_id", value: "1720087555237" },
  { label: "Plan", placeholder: "Plan", name: "plan", value: "Oro" },
])

const ProfileForm = ({ isDisabled, onSubmitForm, handleState }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data);
    handleState()
    onSubmitForm()
  })


  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center w-fit mx-auto mt-5 mb-10 font-poppins">
      <h2 className="text-2xl font-bold col-span-full">Tus datos de contacto</h2>
      <>
        <Input
          isDisabled={isDisabled}
          register={register("email", emailValidation)}
          error={errors.email}
          label={"Email"}
          value={"justina.io@gmail.com"}
        />

        <Input
          isDisabled={isDisabled}
          register={register("phone", phoneValidation)}
          error={errors.phone}
          label={"Teléfono / Celular"}
          placeholder={"Teléfono"}
          value={"11244545"}
        />

        <RegionSelected
          register={register}
          watch={watch}
          setValue={setValue}
          isDisabled={isDisabled}
        />

        <Input
          isDisabled={isDisabled}
          register={register("locality")}
          error={errors.locality}
          label={"Localidad"}
          value={"Limboriu"}
        />

        <Input
          isDisabled={isDisabled}
          register={register("address")}
          error={errors.address}
          label={"Dirección"}
          placeholder={"Dirección"}
          value={"Calle F. 123"}
        />
      </>


      <div className="divider my-2 col-span-full"></div>
      <h2 className="text-2xl font-bold col-span-full">Tu Plan Médico</h2>
      <>
        <Select
          column
          isDisabled={isDisabled}
          register={register("plan_type")}
          error={errors.plan_type}
          label={"Tipo de Plan"}
          options={type_plan}
        />

        {planFields.map(({ label, placeholder, name, value }) => (
          <Input
            isDisabled={isDisabled}
            key={name}
            label={label}
            value={value}
            placeholder={placeholder ?? label}
            register={register(name)}
            error={errors[name]}
          />
        ))}
      </>


      <SubmitButton
        addClassName={"col-span-full mt-5"}
        onClick={isDisabled ?
          (e) => {
            e.preventDefault()
            handleState()
          }
          : onSubmit}>
        {isDisabled ? "editar" : "guardar"}
      </SubmitButton>



    </form>
  )
}

export default ProfileForm