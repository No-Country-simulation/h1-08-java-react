import SectionCollapse from "../../../../components/atoms/SectionCollapse"
import useLanguage from "../../../../hooks/useLanguage"
import SubmitButton from "../../../../components/atoms/SubmitButton"

const CreateClinicalHistory = ({ id }) => {
    const lang = useLanguage()

    return (
        <section className="w-11/12 min-w-[350px] mx-auto mt-6 mb-12 py-6">

            <h1 className={`collapse-title text-3xl font-bold bg-light rounded-2xl  border border-orange text-center uppercase card-shadow-static`}>
                {lang === "es" ? "historia clínica" : "clinical history"}
            </h1>
            <form className="w-full flex flex-col gap-3.5 mt-8">
                <SectionCollapse title={"Antecedentes"}></SectionCollapse>
                <SectionCollapse title={"Diágnostico"}></SectionCollapse>
                <SectionCollapse title={"Medicamentos"}></SectionCollapse>
                <SectionCollapse title={"Estudios"}></SectionCollapse>
                <SectionCollapse title={"Interconsultas"}></SectionCollapse>

                <SubmitButton addClassName={"w-fit text-2xl px-8 mt-5 mx-auto"}>
                    {lang === "es" ? "guardar" : "save"}
                </SubmitButton>
            </form>

            GENERAR HISTORIA CLINICA {id}
        </section>
    )
}

export default CreateClinicalHistory