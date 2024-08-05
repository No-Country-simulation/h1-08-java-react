import SectionCollapse from "../../../../components/atoms/SectionCollapse"
import useLanguage from "../../../../hooks/useLanguage"
import SubmitButton from "../../../../components/atoms/SubmitButton"
import CardLink from "../../../../components/atoms/CardLink"
import ClinicalSection from "../../../../components/organisms/ClinicalSection"
import MedicationModal from "../../../../components/organisms/MedicationModal"
import TextArea from "../../../../components/atoms/TextArea"
import { useForm } from "react-hook-form"
import SearchForm from "../../../../components/atoms/SearchForm"


const es_interconsults = ["nutrición", "psicología", "fisioterapia", "odontología"]
const en_interconsults = ["nutrition", "psychology", "physiotherapy", "dentistry"]
const medications = [
    {
        name: "omeprazol",
        dose: "50mg",
        type: "pastillas",
        amount: 10,
    },
    {
        name: "paracetamol",
        dose: "500mg",
        type: "tabletas",
        amount: 20,
    }]

const studies = [
    {
        type: "laboratorio",
        info: "análisis de sangre ",
    },
    {

        type: "imagen",
        info: "electrocardiograma",
    }]

const CreateClinicalHistory = ({ id }) => {
    const lang = useLanguage()
    const interconsults = lang === "es" ? es_interconsults : en_interconsults



    const { register, handleSubmit, watch, formState: { errors, } } = useForm()


    return (
        <section className="w-11/12 min-w-[350px] mx-auto mt-6 mb-12 py-6">

            <h1 className={`collapse-title text-3xl font-bold bg-light rounded-2xl  border border-orange text-center uppercase card-shadow-static`}>
                {lang === "es" ? "historia clínica" : "clinical history"}
            </h1>
            <form className="w-full flex flex-col gap-3.5 mt-8">

                <SectionCollapse title={"Antecedentes"} contentClassName={"md:px-5"}>
                    <TextArea register={register("family_history")} label={"Antecedentes de la enfermedad"} placeholder={"Motivo de la consulta."} />

                    <TextArea register={register("disease_history")} label={"Antecedentes familiares"} placeholder={"Observaciones."} />
                </SectionCollapse>

                <SectionCollapse title={"Diágnostico"} contentClassName={"md:px-5"}>
                    <div className="flex flex-wrap justify-center md:justify-between mb-6 gap-6 items-center py-2 px-3">
                        <p className="text-xl">
                            Código CIE-10:
                            <span className="text-black font-medium ml-10 pl-10 py-2 pr-24 border border-orange rounded-xl is-disabled">Patología</span>
                        </p>

                        <SearchForm handleSubmitSearch={() => { }} />
                    </div>
                    <TextArea register={register("diagnosis")} placeholder={"Diagnosticar manualmente."}>
                    </TextArea>
                </SectionCollapse>

                <ClinicalSection title={"Medicamentos"} onClick={() => document.getElementById('medication_modal').showModal()} data={medications} isStudy={false} />

                <ClinicalSection title={"Estudios"} data={studies} isStudy={true} onClick={() => { }} />

                <SectionCollapse title={"Interconsultas"} contentClassName={"flex flex-wrap justify-evenly gap-5 w-full"}>

                    {interconsults.map((item, i) => <CardLink width={"w-3/4 md:w-[248px] is-disabled"} title={item} imgClass={"rotate-90"} key={i} />)}

                </SectionCollapse>

                <SubmitButton addClassName={"w-fit text-2xl px-8 mt-5 mx-auto"}>
                    {lang === "es" ? "guardar" : "save"}
                </SubmitButton>
            </form>

            <MedicationModal />
        </section>
    )
}

export default CreateClinicalHistory