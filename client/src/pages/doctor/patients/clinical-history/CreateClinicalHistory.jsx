import SectionCollapse from "../../../../components/atoms/SectionCollapse"
import useLanguage from "../../../../hooks/useLanguage"
import SubmitButton from "../../../../components/atoms/SubmitButton"
import CardLink from "../../../../components/atoms/CardLink"

const es_interconsults = ["nutrición", "psicología", "fisioterapia", "odontología"]
const en_interconsults = ["nutrition", "psychology", "physiotherapy", "dentistry"]

const CreateClinicalHistory = ({ id }) => {
    const lang = useLanguage()
    const interconsults = lang === "es" ? es_interconsults : en_interconsults
    return (
        <section className="w-11/12 min-w-[350px] mx-auto mt-6 mb-12 py-6">

            <h1 className={`collapse-title text-3xl font-bold bg-light rounded-2xl  border border-orange text-center uppercase card-shadow-static`}>
                {lang === "es" ? "historia clínica" : "clinical history"}
            </h1>
            <form className="w-full flex flex-col gap-3.5 mt-8">
                <SectionCollapse title={"Antecedentes"} contentClassName={"bg-light"}></SectionCollapse>

                <SectionCollapse title={"Diágnostico"} contentClassName={"bg-light"}></SectionCollapse>

                <SectionCollapse title={"Medicamentos"} contentClassName={"bg-light"}></SectionCollapse>

                <SectionCollapse title={"Estudios"} contentClassName={"bg-light"}>

                </SectionCollapse>

                <SectionCollapse title={"Interconsultas"} className={"bg-light is-disabled"} contentClassName={"flex flex-wrap justify-evenly gap-5 w-full"}>
                    {interconsults.map((item, i) => <CardLink width={"w-3/4 md:w-[248px]"} title={item} imgClass={"rotate-90"} key={i} />)}
                </SectionCollapse>

                <SubmitButton addClassName={"w-fit text-2xl px-8 mt-5 mx-auto"}>
                    {lang === "es" ? "guardar" : "save"}
                </SubmitButton>
            </form>

        </section>
    )
}

export default CreateClinicalHistory