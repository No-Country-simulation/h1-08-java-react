import { useState } from "react";
import LabResultCard from "../../../../components/molecules/LabResultCard";
import MedicalHistoryCard from "../../../../components/molecules/MedicalHistoryCard";
import { search, arrowFilter } from "../../../../assets";

const ReportsAndResults = () => {
  const medicalInfo = [
    {
      specialty: "Cardiólogo",
      location: "Hospital Italiano",
      date: "23/04/2023",
      details: {
        datosGenerales: {
          nombreYApellido: "Raul Benitez",
          medico: "Dr. Sanchez",
          especialidad: "Cardiología",
        },
        antecedentes: {
          actual:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        diagnostico: {
          patologia: "Arritmia",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        tratamiento: {
          planTerapeutico: "Lorem",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        examenFisico: {
          caracteristicas:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
      },
    },
    {
      specialty: "Médico Cabecera",
      location: "Sanatorio Sur",
      date: "23/04/2023",
      details: {
        datosGenerales: {
          nombreYApellido: "Raul Benitez",
          medico: "Dr. Sanchez",
          especialidad: "Médico Cabecera",
        },
        antecedentes: {
          actual:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        diagnostico: {
          patologia: "Arritmia",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        tratamiento: {
          planTerapeutico: "Lorem",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
        examenFisico: {
          caracteristicas:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur. Amet fermentum dolor tristique ultrices sit sed. Viverra viverra pretium venenatis tincidunt nisi sociis vitae pharetra blandit. Viverra libero.",
        },
      },
    },
  ];

  const labResultInfo = [
    {
      examination: "Análisis de Sangre ",
      location: "Hospital Español",
      date: "23/04/2023",
    },
    {
      examination: "Electrocardiograma",
      location: "Sanatorio Sur",
      date: "03/04/2024",
    },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  const handleTabChange = (event) => {
    setSelectedTabIndex(parseInt(event.target.value));
  };

  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          id="tab1"
          name="my_tabs_2"
          role="tab"
          className={`tab font-poppins text-xl min-w-[150px] h-14 rounded-2xl [--tab-border-color:orange] ${
            selectedTabIndex === 1
              ? "[--tab-bg:bg-light] text-black"
              : "[--tab-bg:bg-orange] [--tab-border-color:orange] text-black/50"
          }`}
          aria-label="Hist. Clínica"
          value="1"
          checked={selectedTabIndex === 1}
          onChange={handleTabChange}
        />
        <div
          role="tabpanel"
          className="tab-content bg-light backdrop-blur-sm border border-orange rounded-box p-3 min-w-[350px]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-stretch md:flex-row gap-4">
              <div className="flex flex-row gap-2 justify-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full min-w-[244px] max-w-xs h-[50px] rounded-2xl p-4 bg-transparent border border-magenta disabled is-disabled"
                />
                <button className="w-[46px] h-auto p-1 bg-transparent border border-magenta rounded-2xl font-poppins font-normal text-2xl text-magenta text-center disabled is-disabled">
                  <img src={search} alt="Search icon" />
                </button>
              </div>
              <div className="flex flex-row gap-16 justify-between items-center">
                <h1 className="font-poppins font-normal text-black text-2xl">
                  Filtrar por
                </h1>
                <button className="w-[109px] h-10 p-2 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta flex items-center justify-center disabled is-disabled">
                  <img src={arrowFilter} alt="arrow icon" />
                </button>
              </div>
              <hr className="mx-auto border-2 border-black w-4/6 min-w-[293px] mt-2 mb-5 md:hidden" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {medicalInfo.map((medicalInfoItem, index) => (
                <MedicalHistoryCard
                  key={index}
                  link={`/historia-clinica/${medicalInfoItem.specialty}`}
                  specialty={medicalInfoItem.specialty}
                  location={medicalInfoItem.location}
                  date={medicalInfoItem.date}
                />
                
              ))}
            </div>
          </div>
        </div>

        <input
          type="radio"
          id="tab2"
          name="my_tabs_2"
          role="tab"
          className={`tab font-poppins text-xl min-w-[150px] h-14 rounded-2xl [--tab-border-color:orange] ${
            selectedTabIndex === 2
              ? "[--tab-bg:bg-light] text-black"
              : "[--tab-bg:bg-orange] [--tab-border-color:orange] text-black/50"
          }`}
          aria-label="Laboratorio"
          value="2"
          checked={selectedTabIndex === 2}
          onChange={handleTabChange}
        />
        <div
          role="tabpanel"
          className="tab-content bg-light backdrop-blur-sm border border-orange rounded-box p-3 min-w-[350px]"
        >
          <div className="flex flex-col gap-4">
          <div className="flex flex-col items-stretch md:flex-row gap-4">
              <div className="flex flex-row gap-2 justify-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full min-w-[244px] max-w-xs h-[50px] rounded-2xl p-4 bg-transparent border border-magenta disabled is-disabled"
                />
                <button className="w-[46px] h-auto p-1 bg-transparent border border-magenta rounded-2xl font-poppins font-normal text-2xl text-magenta text-center disabled is-disabled">
                  <img src={search} alt="Search icon" />
                </button>
              </div>
              <div className="flex flex-row gap-16 justify-between items-center">
                <h1 className="font-poppins font-normal text-black text-2xl">
                  Filtrar por
                </h1>
                <button className="w-[109px] h-10 p-2 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta flex items-center justify-center disabled is-disabled">
                  <img src={arrowFilter} alt="arrow icon" />
                </button>
              </div>
              <hr className="mx-auto border-2 border-black w-4/6 min-w-[293px] mt-2 mb-5 md:hidden" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {labResultInfo.map((labResultInfoItem, index) => (
                <LabResultCard
                  key={index}
                  examination={labResultInfoItem.examination}
                  location={labResultInfoItem.location}
                  date={labResultInfoItem.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAndResults;
