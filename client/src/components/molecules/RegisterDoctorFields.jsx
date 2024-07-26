import Select from '../atoms/Select'
import Input from '../atoms/Input'
import { defaultRequireValidation } from '../../validations/commonFormValidation'
import { es_doctor_specialities, en_doctor_specialities } from '../../data/doctor_specialities'
import useLanguage from '../../hooks/useLanguage'

const RegisterDoctorFields = ({ register, errorSpeciality, errorsDoctorValidation }) => {
    const currentLanguage = useLanguage()
    return (
        <>
            <Select
                register={register("speciality", defaultRequireValidation)}
                error={errorSpeciality}
                column
                label={"Especialidad"}
                key={"speciality-form"}
                options={currentLanguage === "es" ? es_doctor_specialities : en_doctor_specialities}
            />
            <Input
                register={register("doctorValidation", defaultRequireValidation)}
                error={errorsDoctorValidation}
                label={"N° de matricula*"}
                placeholder={"N° de matricula"}
                key={"doctorValidation-form"}
        />
        </>
    )
}

export default RegisterDoctorFields