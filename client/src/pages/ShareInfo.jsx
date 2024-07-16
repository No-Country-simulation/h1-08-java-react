import SectionCard from "../components/molecules/SectionCard"
import infoIcon from "../assets/icons/info.svg"

const ShareInfo = () => {
    return (
        <section className="flex flex-col items-center my-5">
            <SectionCard
                sectionName="Compartir"
                sectionIcon={infoIcon}
                altIcon={"info-icon"}
                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur blanditiis libero adipisci obcaecati unde provident quis"}
            />
            
        </section>
    )
}

export default ShareInfo