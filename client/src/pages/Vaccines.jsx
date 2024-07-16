import SectionCard from "../components/molecules/SectionCard"
import Collapse from "../components/atoms/Collapse"
import injectionIcon from "../assets/icons/injection.svg"

const vaccinesList = [
    {
        title: "gripe", items: [
            { name: "1er dosis", state: "aplicada" }
        ]
    },
    {
        title: "tetano", items: [
            { name: "1er dosis", state: "aplicada" }
        ]
    },
    {
        title: "covid", items: [
            { name: "1er dosis", state: "aplicada" }
        ]
    },
    {
        title: "hepatitis a", items: [
            { name: "1er dosis", state: "aplicada" },
            { name: "2da dosis", state: "sin aplicar" }
        ]
    },
]

const Vaccines = () => {
    return (
        <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
            <SectionCard
                sectionName="Vacunas"
                sectionIcon={injectionIcon}
                altIcon="injection-icon"
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam fugit quae neque blanditiis"}
            />
            {
                vaccinesList.map(({ title, items }, index) => (
                    <Collapse
                        key={`${title}-${index}`}
                        title={title}
                        icon={injectionIcon}
                    >
                        {
                            items.map(({ name, state }, index) => (
                                <div key={`${name}-${index}`} className="flex justify-between px-3 py-1 capitalize font-poppins">
                                    <p className="text-lg font-medium text-gray-900">{name}</p>
                                    <p className="text-xl font-bold text-gray-900">{state}</p>
                                </div>
                            ))
                        }
                    </Collapse>
                ))
            }

        </section>
    )
}

export default Vaccines