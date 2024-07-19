import SectionCard from "../../components/molecules/SectionCard"
import { capsule, lupaIcon } from "../../assets"
import Collapse from "../../components/atoms/Collapse"
import formatDate, { getRandomDate } from "../../utils/formatDate"

const startDate = new Date(2023, 0, 1); // 1 de enero de 2023
const endDate = new Date(2024, 6, 31); // 31 de diciembre de 2024

const medicationsList = [
  {
    title: "omeprazol", items: [
      { date: formatDate(getRandomDate(startDate, endDate)), state: "finalizado" },
      { date: formatDate(new Date(2024, 5, 31)), state: "en tratamiento" }
    ]
  },
  {
    title: "paracetamol", items: [
      { date: formatDate(getRandomDate(startDate, endDate)), state: "finalizado" }
    ]
  },
  {
    title: "gastritis", items: [
      { date: formatDate(getRandomDate(startDate, endDate)), state: "finalizado" }
    ]
  },
  {
    title: "rinitis", items: [
      { date: formatDate(getRandomDate(startDate, endDate)), state: "finalizado" },
      { date: formatDate(new Date(2024, 6, 15)), state: "en tratamiento" }
    ]
  },
]


const Medications = () => {
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <SectionCard
        sectionName="Mis Medicamentos"
        sectionIcon={capsule}
        altIcon={"medicine-icon"}
        description={`Aquí se muestran todos los medicamentos que están ligados a tus tratamientos`}
      />


      {
        medicationsList.map(({ title, items }, index) => (
          <Collapse
            key={`${title}-${index}`}
            title={title}
            icon={lupaIcon}
          >
            {
              items.map(({ date, state }, index) => (
                <div key={`${date}-${index}`} className="flex justify-between px-3 py-1 capitalize font-poppins">
                  <p className="text-lg font-medium text-gray-900">{date}</p>
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

export default Medications