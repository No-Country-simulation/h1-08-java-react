import { search, arrowFilter } from "../../assets";
import { useState } from "react";
import useLanguage from "../../hooks/useLanguage"
import formatDate from "../../utils/formatDate";
import AppointmentCard from "../../components/molecules/AppointmentCard";

const AgendaSection = () => {
  const lang = useLanguage();
  const date = new Date();
  const formattedDate = formatDate(date, lang)

  const [selectedFilter, setSelectedFilter] = useState("Todo");
  const filterOptions = ["Todo", "En espera", "Atendido", "Cancelado"];

  const appointments = [
    { id: 1, status: "En espera", horaCita: "16:30 hs", nombre: "German Ravarotto", dni: "31.456.678", obraSocial: "Medicus" },
    { id: 2, status: "Atendido", horaCita: "17:30 hs", nombre: "Gabriela Patiño", dni: "32.123.654", obraSocial: "Medicus" },
    { id: 3, status: "Cancelado", horaCita: "18:00 hs", nombre: "Franco Maidana", dni: "32.789.012", obraSocial: "Medicus" },
    { id: 4, status: "Atendido", horaCita: "14:30 hs", nombre: "Miguel Chavez", dni: "30.747.682", obraSocial: "Medicus" },
  ];

  const filteredAppointments = (appointments, selectedFilter) => {
    if (selectedFilter === "Todo") {
      return appointments;
    } else {
      return appointments.filter((appointment) => appointment.status === selectedFilter);
    }
  };


  return (
    <section className="flex flex-col items-center mx-auto w-full gap-10 py-10 px-6 rounded-2xl bg-light backdrop-blur-sm shadowCard border border-orange">
      <div className="flex flex-col md:flex-row gap-x-44 gap-3 justify-between max-w-[850px]">
        <h1 className="text-black text-4xl font-poppins capitalize font-medium text-center">
          Agenda Diaria
        </h1>
        <span className="text-black text-[26px] font-poppins capitalize text-right">
          {formattedDate}
        </span>
      </div>

      <hr className="mx-auto my-0 border-2 border-black w-4/5" />

      <div className="flex items-center w-full p-6 min-h-[86px] rounded-2xl shadowCard border border-orange">
        <p className="text-black text-3xl font-poppins font-semibold">
          Para hoy tienes 6 citas agendadas.
        </p>
      </div>

      <div className="flex flex-col items-stretch md:flex-row gap-4">
        <div className="flex flex-row gap-2 justify-center">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full min-w-[244px] max-w-xs h-[50px] rounded-2xl p-4 bg-transparent border border-magenta is-disabled"
          />
          <button className="w-[46px] h-auto p-1 bg-transparent border border-magenta rounded-2xl font-poppins font-normal text-2xl text-magenta text-center is-disabled">
            <img src={search} alt="Search icon" />
          </button>
        </div>
        <div className="flex flex-row gap-16 justify-between items-center">
          <h1 className="font-poppins font-normal text-black text-2xl">
            Filtrar por
          </h1>
          <div className="relative w-auto h-10 border border-magenta rounded-lg">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-[200px] h-full appearance-none bg-transparent px-5 text-2xl text-magenta"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <img
              src={arrowFilter}
              alt="arrow icon"
              className="absolute top-0 right-0 m-2"
            />
          </div>
        </div>
      </div>

      <div className="h-[940px] w-11/12 px-4 overflow-y-scroll overscroll-y-auto">
        {filteredAppointments(appointments, selectedFilter).map((appointment) => (
          <AppointmentCard
            key={appointment.id} // Replace with unique identifier
            status={appointment.status}
            horaCita={appointment.horaCita}
            nombre={appointment.nombre}
            dni={appointment.dni}
            obraSocial={appointment.obraSocial}
          />
        ))}
      </div>
    </section>
  );
};

export default AgendaSection;
