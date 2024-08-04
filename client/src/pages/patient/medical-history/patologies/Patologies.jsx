import SectionCard from "../../../../components/molecules/SectionCard";
import Collapse from "../../../../components/atoms/Collapse";
import { lupaIcon, medicine } from "../../../../assets";

const Patologies = () => {
  const patologies = [
    {
      title: "Gastritis",
      date: "14/12/23",
      status: "Activa",
      doctor: "Dr. Sanchez",
      treatment: [
        {
          medication: ["Bayaspirina", "Omeprazol"],
          diet: "Comer menos",
        },
      ],
      appointment: [
        {
          doctor: "Dr. Sanchez",
          appointmentDate: "18/08/2024",
        },
      ],
      reports: [
        {
          institution: "Laboratorio Norte",
          notes: "Lorem ipsum dolor sit amet consestetur.",
        },
      ],
    },
    {
      title: "Gripe",
      date: "20/05/24",
      status: "Finalizado",
      doctor: "Dr. Sanchez",
      treatment: [
        {
          medication: ["Teragrip"],
        },
      ],
      reports: [
        {
          institution: "Rodrigo Bueno CCI",
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
        <Collapse
          key={`${patologie.title}-${index}`}
          title={patologie.title}
          icon={lupaIcon}
        >
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 px-3 py-1 gap-2 md:gap-x-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Fecha de diagnostico:
                </p>
                <span className="font-roboto font-normal text-black text-2xl">
                  {patologie.date}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Estado Actual:
                </p>
                <span className="font-roboto font-normal text-black text-2xl">
                  {patologie.status}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Medico-Especialista:
                </p>
                <span className="font-roboto font-normal text-black text-2xl">
                  {patologie.doctor}
                </span>
              </div>
            </div>

            {patologie.treatment && patologie.treatment.length > 0
              ? patologie.treatment.map((treatment, index) => (
              <div
                key={`${treatment}-${index}`}
                className="flex flex-col gap-2"
              >
                <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px]">
                  Tratamientos
                </h1>
                <div>
                  <p className="font-roboto font-normal text-black/50 text-xl">
                    Medicación:
                  </p>
                  <div className="flex flex-col">
                    {treatment.medication.map((medication, index) => (
                      <span
                        key={index}
                        className="font-roboto font-normal text-black text-2xl"
                      >
                        {medication}
                      </span>
                    ))}
                  </div>
                </div>
                {treatment.diet ? (
                  <div>
                    <p className="font-roboto font-normal text-black/50 text-xl">
                      Dieta:
                    </p>
                    <span className="font-roboto font-normal text-black text-2xl">
                      {treatment.diet}
                    </span>
                  </div>
                ) : (
                  null
                )}
              </div>
            )) : null }

            {patologie.appointment && patologie.appointment.length > 0
              ? patologie.appointment.map((appointment, index) => (
                  <div
                    key={`${appointment}-${index}`}
                    className="flex flex-col gap-2"
                  >
                    <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px]">
                      Citas
                    </h1>
                    {appointment.doctor ? (
                      <div>
                        <p className="font-roboto font-normal text-black/50 text-xl">
                          Médico:
                        </p>
                        <span className="font-roboto font-normal text-black text-2xl">
                          {appointment.doctor}
                        </span>
                      </div>
                    ) : (
                      <p>No tienes citas programadas para esta patología</p>
                    )}
                    {appointment.appointmentDate ? (
                      <div>
                        <p className="font-roboto font-normal text-black/50 text-xl">
                          Fecha de cita:
                        </p>
                        <span className="font-roboto font-normal text-black text-2xl">
                          {appointment.appointmentDate}
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))
              : null}

            {patologie.reports && patologie.reports.length > 0
              ? patologie.reports.map((reports, index) => (
              <div key={`${reports}-${index}`} className="flex flex-col gap-2">
                <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px]">
                  Informes y Resultados
                </h1>
                <div>
                  <p className="font-roboto font-normal text-black/50 text-xl">
                    Institucion:
                  </p>
                  <span className="font-roboto font-normal text-black text-2xl">
                    {reports.institution}
                  </span>
                </div>
                {reports.notes ? (
                  <div>
                    <p className="font-roboto font-normal text-black/50 text-xl">
                    Notas Adicionales:
                    </p>
                    <span className="font-roboto font-normal text-black text-2xl">
                      {reports.notes}
                    </span>
                  </div>
                ) : (
                  null
                )}
              </div>
            )) : null}
          </div>
        </Collapse>
      ))}
    </section>
  );
};

export default Patologies;
