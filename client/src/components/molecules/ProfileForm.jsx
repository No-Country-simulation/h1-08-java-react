import { defaultRequireValidation, emailValidation, phoneValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import { useForm } from "react-hook-form"
import SubmitButton from "../atoms/SubmitButton"
import RegionSelected from "./RegionSelected"
import Select from "../atoms/Select"
import LittleCardSelector from "../../components/atoms/LittleCardSelector";
import getAge from "../../utils/getAge"
import roles from "../../data/roles"
import SectionCollapse from "../atoms/SectionCollapse"
import useLanguage from "../../hooks/useLanguage"

const blood_types = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
const genres = [
  { name: "-", value: null, isDefaultChecked: true },
  { name: "Masculino", value: "MALE" },
  { name: "Femenino", value: "FEMALE" },
  { name: "Transgénero", value: "TRANS_GENDER" },
  { name: "No binario", value: "NOT_BINARY" },
  { name: "Otro", value: "NOT_SPECIFIED" },
]
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

const ProfileForm = ({ userData, isDisabled, onSubmitForm, handleState, isStatic, textStatic }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()
  const lang = useLanguage()
  const onSubmit = handleSubmit(onSubmitForm)


  const planFields = [
    { label: "Nombre", placeholder: "Nombre de su cobertura", name: "plan_name", value: userData?.healthPlan?.name ?? "Osde" },
    { label: "Número de afiliado", placeholder: "Número de afiliado", name: "plan_member_id", value: userData?.healthPlan?.numAffiliate ?? "1720087555237" },
    { label: "Plan", placeholder: "Plan", name: "plan", value: userData?.healthPlan?.plan ?? "Oro" },
  ]
  const typePlanOptions = userData?.healthPlan?.typeHealth
    ? updatedTypePlan(userData.healthPlan.typeHealth) : type_plan

  const userAge = isDisabled ? userData.age : (watch("birthdate") ? getAge(watch("birthdate")) : "-")
  const userIMC = isDisabled ? userData.imc : (watch("weight") && watch("height")
    ? ((watch("weight") / (watch("height") * watch("height"))).toFixed(2) ?? 0)
    : "-");

  return (
    <form className={`grid grid-cols-1 md:grid-cols-2 gap-6 justify-center md:w-fit w-11/12 ${!isStatic && "max-w-[768px]"} mx-auto mt-5 mb-10 font-poppins ${(isDisabled && !isStatic) && "opacity-85"}`}>

      <SectionCollapse isStatic={isStatic} text={textStatic} title={lang === "es" ? "Datos Generales" : "General Data"}>
        <div className="col-span-full flex flex-wrap gap-y-5 justify-between items-center my-5">
          <LittleCardSelector register={register} watch={watch} originalValue={userData?.gender} inputName={"gender"} label={"Género"} isSelector={true} options={genres} isDisabled={isDisabled} />
          <LittleCardSelector register={register} watch={watch} originalValue={userAge} inputName={"age"} label={"Edad"} isOnlyText={true} isDisabled={isDisabled} />

          {
            userData?.role === roles[0].value && (<>
              <LittleCardSelector register={register} watch={watch} originalValue={userData?.blood_type} inputName={"blood_type"} label={"G. Sanguíneo"} isSelector={true} options={blood_types} isDisabled={isDisabled} />
              <LittleCardSelector register={register} watch={watch} originalValue={userData?.height} inputName={"height"} label={"Estatura en M."} type={"number"} placeholder={"Ej: 1.50"} isDisabled={isDisabled} />
              <LittleCardSelector register={register} watch={watch} originalValue={userData?.weight} inputName={"weight"} label={"Peso en Kg."} type={"number"} placeholder={"Ej: 65.50"} isDisabled={isDisabled} />
              <LittleCardSelector register={register} watch={watch} originalValue={userData?.imc ?? userIMC} inputName={"imc"} label={"IMC"} isOnlyText={true} isDisabled={isDisabled} />
            </>)
          }

        </div>
        <LittleCardSelector register={register} watch={watch} originalValue={userData?.birthdate} inputName={"birthdate"} label={"Fecha de Nacimiento"} addClassName={"col-span-full mx-auto col-span-full min-w-[275px]"} type="date" isDisabled={isDisabled} />
      </SectionCollapse>

      <SectionCollapse isStatic={isStatic} text={textStatic} title={lang === "es" ? "Datos de contacto" : "Contact Data"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center md:w-fit w-11/12 max-w-[768px] mx-auto my-5 font-poppins">
          <Input
            watch={watch}
            inputName={"email"}
            isDisabled={isDisabled}
            register={register("email", emailValidation)}
            error={errors.email}
            label={"Email"}
            value={userData?.email ?? "justina.io@gmail.com"}
          />

          <Input
            watch={watch}
            inputName={"phone"}
            isDisabled={isDisabled}
            register={register("phone", phoneValidation)}
            error={errors.phone}
            typeInput={"tel"}
            label={"Teléfono / Celular"}
            placeholder={"Teléfono"}
            value={userData?.phoneNumber ?? "11244545"}
          />

          <RegionSelected
            values={userData?.address}
            register={register}
            watch={watch}
            setValue={setValue}
            isDisabled={isDisabled}
          />

          <Input
            watch={watch}
            inputName={"locality"}
            isDisabled={isDisabled}
            register={register("locality")}
            error={errors.locality}
            label={"Localidad"}
            value={userData?.address?.city ?? "Limboriu"}
          />

          <Input
            watch={watch}
            inputName={"address"}
            isDisabled={isDisabled}
            register={register("address")}
            error={errors.address}
            label={"Dirección"}
            placeholder={"Dirección"}
            value={userData?.address?.street ?? "Calle F. 123"}
          />
        </div>
      </SectionCollapse>

      {
        userData?.role === roles[0].value && (
          <SectionCollapse isStatic={isStatic} text={textStatic} title={lang === "es" ? "Plan Médico" : "Medical Plan"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center md:w-fit w-11/12 max-w-[768px] mx-auto my-5 font-poppins">
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
                  watch={watch}
                  inputName={name}
                  isDisabled={isDisabled}
                  key={name}
                  label={label}
                  value={value}
                  placeholder={placeholder ?? label}
                  register={register(name)}
                  error={errors[name]}
                />
              ))}
            </div>
          </SectionCollapse>
        )
      }
      {
        !isStatic &&
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
      }



    </form>
  )
}

export default ProfileForm