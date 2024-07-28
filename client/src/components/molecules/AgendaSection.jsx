import { format } from "@formkit/tempo";
import { search, arrowFilter } from "../../assets";
import { useState } from 'react';

const AgendaSection = () => {
  const lang = "es";
  const date = new Date();
  const formattedDate = format(date, "dddd DD/MM/YYYY", lang);

  const [selectedFilter, setSelectedFilter] = useState('Todo');
  const filterOptions = ['Todo', 'En espera', 'Atentido', 'Cancelado'];

  return (
    <section className="flex flex-col items-center mx-auto w-[1064px] gap-6 p-6 rounded-2xl bg-light backdrop-blur-sm shadowCard border border-orange">
      <div className="flex flex-row gap-x-44 justify-between max-w-[850px]">
        <h1 className="text-black text-4xl font-poppins capitalize font-medium">
          Agenda Diaria
        </h1>
        <span className="text-black text-[26px] font-poppins capitalize">
          Hoy, {formattedDate}
        </span>
      </div>
      <hr className="mx-auto border-2 border-black w-4/5 min-w-[800px]" />
      <div className="flex items-center w-[848px] h-[86px] py-4 px-5 rounded-2xl shadowCard border border-orange">
        <p className="text-black text-4xl font-poppins capitalize font-semibold">
          para hoy tienes 6 citas agendadas.
        </p>
      </div>
      <div className="flex flex-col items-stretch md:flex-row gap-4">
        <div className="flex flex-row gap-2 justify-center">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full min-w-[244px] max-w-xs h-[50px] rounded-2xl p-4 bg-transparent border border-magenta"
          />
          <button className="w-[46px] h-auto p-1 bg-transparent border border-magenta rounded-2xl font-poppins font-normal text-2xl text-magenta text-center">
            <img src={search} alt="Search icon" />
          </button>
        </div>
        <div className="flex flex-row gap-16 justify-between items-center">
      <h1 className="font-poppins font-normal text-black text-2xl">
        Filtrar por
      </h1>
      <div className="relative w-[109px] h-10 border border-magenta rounded-lg">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="w-full h-full appearance-none bg-transparent pl-4 pr-10 text-2xl text-magenta"
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
    </section>
  );
};

export default AgendaSection;
