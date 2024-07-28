import PropTypes from "prop-types";
import CustomButton from "../atoms/CustomButtom";

const AppointmentCard = ({ status, horaCita, nombre, dni, obraSocial }) => {
  return (
    <div className="bg-light border border-orange shadowCard rounded-2xl w-[848px] h-[309px] p-6 flex flex-col justify-center items-center relative my-4">
      <div
        className={`absolute left-0 rounded-l-2xl ${
          status === "En espera"
            ? "bg-success"
            : status === "Atendido"
            ? "bg-warning"
            : "bg-error"
        } w-5 h-[309px]`}
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-row gap-14 items-center">
          <div className="flex flex-col gap-2">
            <p className="text-black/50 text-xl font-roboto capitalize">
              Hora cita:
            </p>
            <h1 className="text-black text-4xl font-poppins capitalize font-medium">
              {horaCita}
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-black/50 text-xl font-roboto capitalize">
              Estado:
            </p>
            <h1
              className={`badge ${
                status === "En espera"
                  ? "badge-success"
                  : status === "Atendido"
                  ? "badge-warning"
                  : "badge-error"
              } text-black text-center text-xl font-roboto w-[172px] h-8 py-1`}
            >
              {status}
            </h1>
          </div>
          {status === "En espera" && <CustomButton className="is-disabled">Cancelar Cita</CustomButton>}
        </div>

        <hr className="mx-auto border-2 border-black w-4/5 min-w-[630px] my-2.5" />

        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-1">
            <p className="text-black/50 text-xl font-roboto capitalize">
              Nombre:
            </p>
            <h1 className="text-black text-[26px] font-poppins capitalize font-medium">
              {nombre}
            </h1>
          </div>
          <div className="flex flex-row gap-x-48">
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
