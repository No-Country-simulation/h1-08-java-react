import { defaultRequireValidation, emailValidation, phoneValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import { useForm } from "react-hook-form"
import SubmitButton from "../atoms/SubmitButton"
import RegionSelected from "./RegionSelected"
import Select from "../atoms/Select"

const type_plan = [
  { name: "Tipo de cobertura médica", value: 0, isDefaultChecked: true },
  { name: "Prepaga", value: "PREPAGA", },
  { name: "Obra Social", value: "OBRASOCIAL", },
  { name: "Sin cobertura", value: "NINGUNO", },
]

const updatedTypePlan = (type) => {
  type_plan.map(plan => {
    if (plan.value === type) return { ...plan, isDefaultChecked: true };
    return { ...plan };
  })
};

const ProfileForm = ({ userData, isDisabled, onSubmitForm, handleState }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(onSubmitForm)


  const planFields = [
    { label: "Nombre", placeholder: "Nombre de su cobertura", name: "plan_name", value: userData?.healthPlan?.name ?? "Osde" },
    { label: "Número de afiliado", placeholder: "Número de afiliado", name: "plan_member_id", value: userData?.healthPlan?.numAffiliate ?? "1720087555237" },
    { label: "Plan", placeholder: "Plan", name: "plan", value: userData?.healthPlan?.plan ?? "Oro" },
  ]
  const typePlanOptions = userData?.healthPlan?.typeHealth
    ? updatedTypePlan(userData.healthPlan.typeHealth) : type_plan


  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center w-fit mx-auto mt-5 mb-10 font-poppins">
      <h2 className="text-2xl font-bold col-span-full">Tus datos de contacto</h2>
      <>
        <Input
          isDisabled={isDisabled}
          register={register("email", emailValidation)}
          error={errors.email}
          label={"Email"}
          value={userData?.email ?? "justina.io@gmail.com"}
        />

        <Input
          isDisabled={isDisabled}
          register={register("phone", phoneValidation)}
          error={errors.phone}
          label={"Teléfono / Celular"}
          placeholder={"Teléfono"}
          value={userData?.phoneNumber ?? "11244545"}
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
          value={userData?.address?.city ?? "Limboriu"}
        />

        <Input
          isDisabled={isDisabled}
          register={register("address")}
          error={errors.address}
          label={"Dirección"}
          placeholder={"Dirección"}
          value={userData?.address?.street ?? "Calle F. 123"}
        />
      </>

      {
        userData?.role === "PATIENT" && (<>
          <div className="divider my-2 col-span-full"></div>
          <h2 className="text-2xl font-bold col-span-full">Tu Plan Médico</h2>
          <>
            <Select
              column
              isDisabled={isDisabled}
              register={register("plan_type")}
              error={errors.plan_type}
              label={"Tipo de Plan"}
              options={typePlanOptions}
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
        </>)
      }

      <SubmitButton
        addClassName={"col-span-full mt-5 is-disabled"}
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