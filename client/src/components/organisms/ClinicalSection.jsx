import SectionCollapse from '../atoms/SectionCollapse'
import SubmitButton from '../atoms/SubmitButton'
import CardMedication from '../molecules/CardMedication'


const ClinicalSection = ({ data, className, title, onClick, isStudy }) => {
    return (
        <SectionCollapse title={title} className={className} contentClassName={"md:w-10/12 mx-auto"}>
            <div className="flex flex-wrap justify-between pt-2 pb-5 gap-3 items-center">
                <h3 className="text-2xl font-bold">Recetar {title}:</h3>
                <button type="button" onClick={onClick} className="ml-auto border flex justify-between border-secondary items-center h-12 text-center min-w-60 rounded-lg text-secondary text-2xl hover:border-fucsia hover:text-fucsia hover:bg-light">
                    <span className="pl-12 px-10">Prescribir</span>
                    <span className="h-full text-4xl font-medium justify-center flex items-center w-[50px] bg-[#7030A01A] rounded-r-lg border-l border-inherit">+</span>
                </button>
            </div>

            <div className="flex flex-wrap gap-5 md:justify-normal justify-center md:px-1 py-3 bg-orange/30 rounded-2xl">
                {data.map((item, i) => (
                    <CardMedication key={i} medication={item} isRecipe isStudy={isStudy} />
                ))}
            </div>

            <div className="flex items-center justify-between mt-5">
                <p className="text-3xl font-bold capitalize">
                    total de recetas: {data.length}
                </p>
                <SubmitButton addClassName={"text-2xl px-12 font-medium"}>
                    Listo
                </SubmitButton>
            </div>
        </SectionCollapse>)
}

export default ClinicalSection