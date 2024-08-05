import PropTypes from "prop-types";
import CustomButton from "../atoms/CustomButtom";

const AppointmentCard = ({ status, horaCita, nombre, dni, obraSocial }) => {
  return (
    <div className={`bg-light border rounded-2xl w-full min-h-[309px] p-6 flex flex-col justify-center items-center relative mb-10 border-l-[20px] 
      shadow-color-${status === "En espera"
        ? "success border-success"
        : status === "Atendido"
          ? "warning border-warning"
          : "error border-error"
      }`}>
      <div className="flex flex-col items-start w-full">

        <div className="flex w-full flex-wrap items-center justify-between gap-4">

          <div className="flex flex-col gap-2">
            <p className="text-black/50 text-xl font-roboto">
              Hora cita:
            </p>
            <h5 className="text-black text-4xl font-poppins capitalize font-medium">
              {horaCita}
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-black/50 text-xl font-roboto">
              Estado:
            </p>
            <h5 className={`badge ${status === "En espera"
              ? "badge-success"
              : status === "Atendido"
                ? "badge-warning"
                : "badge-error"
              } text-black text-center text-xl font-roboto w-[172px] h-8 py-1`}
            >
              {status}
            </h5>
          </div>

          {status === "En espera"
            ? <CustomButton className="is-disabled px-4">Cancelar Cita</CustomButton>
            : <CustomButton className="is-disabled px-4">Ver Detalles</CustomButton>
          }
        </div>

        <hr className="mx-auto border-2 rounded-3xl border-black w-full my-3" />

        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-1">
            <p className="text-black/50 text-xl font-roboto capitalize">
              Nombre:
            </p>
            <h1 className="text-black text-[26px] font-poppins capitalize font-medium">
              {nombre}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-x-48">
            <div className="flex flex-col gap-1">
              <p className="text-black/50 text-xl font-roboto capitalize">
                DNI:
              </p>
              <h1 className="text-black text-[26px] font-poppins capitalize font-medium">
                {dni}
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-black/50 text-xl font-roboto capitalize">
                Obra Social-Prepaga:
              </p>
              <h1 className="text-black text-[26px] font-poppins capitalize font-medium">
                {obraSocial}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  status: PropTypes.string,
  horaCita: PropTypes.string,
  nombre: PropTypes.string,
  dni: PropTypes.string,
  obraSocial: PropTypes.string,
};

export default AppointmentCard;
