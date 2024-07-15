import CardDescription from "../components/molecules/CardDescription";
import { lupaIcon, arrowDown, medicine } from "../assets";

const Patologias = () => {

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
    <section className="container flex flex-col justify-center items-center px-5 py-7 gap-6">
      <CardDescription
        image={medicine}
        title="Mis Patologías"
        description="Los datos que se presentan son condiciones de salud identificados en Atención Primaria."
      />
      <div className="flex flex-col gap-2">
        {patologies.map((patologie, index) => (
          <details key={index} className="collapse overflow-hidden transition-all duration-300 ease-in-out">
            <summary className="collapse-title btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[340px] h-[72px] px-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <img src={lupaIcon} alt="icon" className="size-10" />
                  {patologie.title}
                </div>
                <img src={arrowDown} alt="arrow icon" className="size-10" />
              </div>
            </summary>
            <ul className="menu collapse-content bg-light backdrop-blur-sm rounded-box z-[1] w-[340px] p-2 shadow">
              {patologie.dates.map((date, index) => (
              <li key={index} className="flex flex-row flex-nowrap items-center">
                <div className="text-xl font-roboto font-normal">{date.date}</div>
                <div className="text-2xl font-roboto font-normal">{date.status}</div>
              </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Patologias;
