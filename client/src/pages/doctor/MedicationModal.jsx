import PropTypes from "prop-types";
import useLanguage from "../../hooks/useLanguage";
import { search, whatsapp } from "../../assets";
import SubmitButton from "../../components/atoms/SubmitButton";

const MedicationModal = () => {
  const lang = useLanguage();

  return (
    <>
      <dialog id="medication_modal" className="modal">
        <div className="modal-box modal-bg backdrop-blur-md border-2 border-orange flex flex-col items-center gap-5">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-outline btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <header className="flex flex-col items-center justify-center gap-4">
              <h3 className="font-bold text-4xl uppercase text-center">
                {lang === "es" ? "Medicamentos" : "Medicines"}
              </h3>
              <hr className="mx-auto my-0 border-2 border-black w-full" />
            </header>
          </form>
          <p className="font-roboto font-normal text-xl text-black w-full text-start normal-case">
            {lang === "es"
              ? "En este espacio, podrás buscar el medicamento que requieres prescribir y recetarlo a tu paciente."
              : "In this space, you can search for the medication that needs to be prescribed and prescribe it to your patient."}
          </p>
          <div className="flex flex-row gap-2 justify-center">
            <input
              type="text"
              placeholder={lang === "es" ? "Buscar" : "Search"}
              className="w-full min-w-[244px] max-w-xs h-[50px] rounded-2xl p-4 border border-magenta is-disabled"
              disabled
            />
            <button
              disabled="disabled"
              className="w-[46px] h-auto p-1 border border-magenta rounded-2xl font-poppins font-normal text-2xl text-magenta text-center is-disabled"
            >
              <img src={search} alt="Search icon" />
            </button>
          </div>
          <div className="flex flex-row gap-4">
            <select
              className="mx-auto select select-secondary border-x-0 border-t-0  border-magenta rounded-b-none bg-fullWhite shadow-sm shadow-magenta backdrop-blur-sm"
              disabled
            >
              <option>
                {lang === "es" ? "Nombre de la droga:" : "Medicine name:"}
              </option>
            </select>

            <input
              type="text"
              placeholder={
                lang === "es" ? "Cantidad Total (caja)" : "Total Quantity (box)"
              }
              className="input mx-auto border-x-0 border-t-0  border-magenta rounded-b-none bg-fullWhite shadow-sm shadow-magenta backdrop-blur-sm"
              disabled
            />
          </div>
          <div className="py-4 px-3 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-11/12 min-w-[330px] max-h-36 flex flex-col justify-between gap-2 font-poppins">
            <h1 className="text-black text-3xl pl-4 pr-1 capitalize font-semibold text-nowrap overflow-hidden text-ellipsis">
              Omeprazol 500mg
            </h1>

            <span className="text-black text-lg pl-4 pr-1 capitalize font-medium text-nowrap overflow-hidden text-ellipsis">
              {lang === "es" ? "Cantidad de caja: 1" : "Box quantity: 1"}
            </span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-black text-3xl pr-1 capitalize font-semibold text-nowrap overflow-hidden text-ellipsis">
              {lang === "es" ? "Dosificación" : "Dosage"}
            </h1>
            <div className="flex flex-row gap-4 items-start">
              <input
                type="text"
                placeholder={
                  lang === "es" ? "Cantidad Total" : "Total Quantity"
                }
                className="input mx-auto border-x-0 border-t-0  border-magenta rounded-b-none bg-fullWhite shadow-sm shadow-magenta backdrop-blur-sm"
                disabled
              />

              <input
                type="text"
                placeholder={
                  lang === "es" ? "Número de dosis" : "Number of doses"
                }
                className="input mx-auto border-x-0 border-t-0  border-magenta rounded-b-none bg-fullWhite shadow-sm shadow-magenta backdrop-blur-sm"
                disabled
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={lang === "es" ? "Cada X Hs" : "Every X Hours"}
                className="input mx-auto border-x-0 border-t-0  border-magenta rounded-b-none bg-fullWhite shadow-sm shadow-magenta backdrop-blur-sm"
                disabled
              />
            </div>
          </div>
          <div className="py-4 px-3 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-11/12 min-w-[330px] max-h-36 flex flex-col justify-between gap-2 font-poppins">
            <span className="text-black text-lg pl-4 pr-1 capitalize font-medium text-nowrap overflow-hidden text-ellipsis">
              {lang === "es"
                ? "Tomar 10 comprimidos, 1 cada 8 horas."
                : "Take 10 tablets, 1 every 8 hours."}
            </span>
          </div>
          <div className="modal-action w-full justify-center">
            <form method="dialog" className="flex flex-row gap-5">
              <button className="btn flex flex-row gap-2 items-center w-auto btn-disabled px-10 h-auto border border-magenta rounded-2xl font-poppins font-bold text-2xl text-magenta text-center is-disabled">
                {lang === "es" ? "Enviar" : "Send"}{" "}
                <img src={whatsapp} alt="Whatsapp icon" />
              </button>
              <SubmitButton addClassName={"px-10 text-2xl"}>
                {lang === "es" ? "Guardar" : "Save"}
              </SubmitButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

MedicationModal.propTypes = {
  isDisabled: PropTypes.string,
};

export default MedicationModal;
