import SectionCard from "../../components/molecules/SectionCard";
import Collapse from "../../components/atoms/Collapse";
import { lupaIcon, medicine } from "../../assets";

const Patologies = () => {
  const patologies = [
    {
      title: "Cefalea",
      dates: [
        {
          date: "12/07/2024",
          status: "En Curso",
        },
        {
          date: "15/07/2024",
          status: "Cerrado",
        },
      ],
    },
    {
      title: "Gripe",
      dates: [
        {
          date: "15/02/2024",
          status: "En Curso",
        },
        {
          date: "15/07/2024",
          status: "Cerrado",
        },
      ],
    },
    {
      title: "Rinitis",
      dates: [
        {
          date: "15/07/2024",
          status: "En Curso",
        },
        {
          date: "15/07/2024",
          status: "Cerrado",
        },
      ],
    },
    {
      title: "Gastritis",
      dates: [
        {
          date: "15/07/2024",
          status: "En Curso",
        },
        {
          date: "15/07/2024",
          status: "Cerrado",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <SectionCard
        sectionName="Mis Patologías"
        sectionIcon={medicine}
        altIcon="injection-icon"
        description={
          "Los datos que se presentan son condiciones de salud identificados en Atención Primaria."
        }
      />


      {patologies.map((patologie, index) => (
        <Collapse key={`${patologie.title}-${index}`} title={patologie.title} icon={lupaIcon}>
          {patologie.dates.map((date, index) => (
            <div
            key={`${date}-${index}`}
            className="flex justify-between px-3 py-1 capitalize font-poppins"
          >
            <p className="text-lg font-medium text-gray-900">{date.date}</p>
            <p className="text-xl font-bold text-gray-900">{date.status}</p>
          </div>
              
              ))}
        </Collapse>
      ))}

      
    </section>
  );
};

export default Patologies;
