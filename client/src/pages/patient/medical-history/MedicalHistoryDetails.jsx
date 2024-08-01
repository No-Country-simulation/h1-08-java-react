import { useState, useEffect } from "react";
import { useParams } from "wouter";
import useAuthStore from "../../../store/auth-store"

const MedicalHistoryDetails = () => {
  // datos del usuario logueado
  const userData = useAuthStore((state) => state.user)

  // eslint-disable-next-line no-unused-vars
  const [detailedData, setDetailedData] = useState({});
  const { specialty } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        },
      },
    },
  ];

  useEffect(() => {
    const selectedSpecialtyData = medicalInfo.find(
      (medicalInfoItem) => medicalInfoItem.specialty === specialty
    );

    if (selectedSpecialtyData) {
      setDetailedData(selectedSpecialtyData.details);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specialty]);

  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div className="font-poppins bg-light border border-orange cardDetails rounded-2xl p-5 w-9/12 min-w-[350px] flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-row gap-20">
            <p className="font-roboto font-normal text-black/50 text-xl">
              Lugar:
            </p>
            {medicalInfo.find((item) => item.specialty === specialty)?.date && (
              <div key="date" className="flex flex-row gap-1">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Fecha:
                </p>
                <p className="font-roboto font-normal text-black text-xl">
                  {
                    medicalInfo.find((item) => item.specialty === specialty)
                      ?.date
                  }
                </p>
              </div>
            )}
          </div>

          {medicalInfo.find((item) => item.specialty === specialty)
            ?.location && (
              <div key="location">
                <h1 className="font-poppins font-medium text-black text-[34px]">
                  {
                    medicalInfo.find((item) => item.specialty === specialty)
                      ?.location
                  }
                </h1>
              </div>
            )}
        </div>
        <hr className="mx-auto border-2 border-black w-4/6 min-w-[293px] my-1" />

        {/* Datos Generales */}
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px] mx-auto">
            Datos Generales
          </h1>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 xl:mx-auto">
            {detailedData?.datosGenerales?.nombreYApellido && (
              <div className="flex flex-col xl:flex-row justify-center xl:gap-2">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Nombre y Apellido:
                </p>
                <span className="font-roboto font-normal text-black text-2xl xl:text-xl">
                  {userData ? `${userData.name} ${userData.lastName}`
                    : detailedData?.datosGenerales?.nombreYApellido
                  }
                </span>
              </div>
            )}

            {detailedData?.datosGenerales?.medico && (
              <div className="flex flex-col xl:flex-row justify-center xl:gap-2">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Medico:
                </p>
                <span className="font-roboto font-normal text-black text-2xl xl:text-xl">
                  {detailedData?.datosGenerales?.medico}
                </span>
              </div>
            )}

            {detailedData?.datosGenerales?.especialidad && (
              <div className="flex flex-col xl:flex-row justify-center xl:gap-2">
                <p className="font-roboto font-normal text-black/50 text-xl">
                  Especialidad:
                </p>
                <span className="font-roboto font-normal text-black text-2xl xl:text-xl">
                  {detailedData?.datosGenerales?.especialidad}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Antecendentes */}
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px] mx-auto">
            Antecendentes
          </h1>
          <div className="flex flex-col gap-2">
            {detailedData?.antecedentes?.actual && (
              <div className="flex flex-col">
                <p className="font-roboto font-semibold text-black text-xl">
                  Actual:
                </p>
                <span className="font-roboto font-normal text-black text-xl">
                  {detailedData?.antecedentes?.actual}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Diagnóstico */}
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px] mx-auto">
            Diagnóstico
          </h1>
          <div className="flex flex-col gap-2">
            {detailedData?.diagnostico?.patologia && (
              <div className="flex flex-col">
                <p className="font-roboto font-semibold text-black text-xl">
                  Patología: {detailedData?.diagnostico?.patologia}
                </p>
                <span className="font-roboto font-normal text-black text-xl">
                  {detailedData?.diagnostico?.descripcion}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tratamiento */}
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px] mx-auto">
            Tratamiento
          </h1>
          <div className="flex flex-col gap-2">
            {detailedData?.tratamiento?.planTerapeutico && (
              <div className="flex flex-col">
                <p className="font-roboto font-semibold text-black text-xl">
                  Plan terapéutico: {detailedData?.tratamiento?.planTerapeutico}
                </p>
                <span className="font-roboto font-normal text-black text-xl">
                  {detailedData?.tratamiento?.descripcion}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Examen Físico */}
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-black underline text-[26px] md:text-[22px] lg:text-[26px] mx-auto">
            Examen Físico
          </h1>
          <div className="flex flex-col gap-2">
            {detailedData?.examenFisico?.caracteristicas && (
              <div className="flex flex-col">
                <p className="font-roboto font-semibold text-black text-xl">
                  Características:
                </p>
                <span className="font-roboto font-normal text-black text-xl">
                  {detailedData?.examenFisico?.caracteristicas}
                </span>
              </div>
            )}
          </div>
        </div>
        <button className="mx-auto w-[268px] h-auto px-6 mt-8 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta text-center py-2 is-disabled disabled">Descargar PDF</button>
      </div>
    </section>
  );
};

export default MedicalHistoryDetails;
