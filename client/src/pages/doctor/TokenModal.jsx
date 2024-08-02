import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../../components/atoms/Input";
import SubmitButton from "../../components/atoms/SubmitButton";
import useLanguage from "../../hooks/useLanguage";

const TokenModal = ({ isDisabled }) => {
  const lang = useLanguage();

  const [token, setToken] = useState("");
  const [patientName, setPatientName] = useState("");
  const [isSyncing, setIsSyncing] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSyncing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = "Yanira Andrea Garcia";
    setPatientName(response);

    setIsSyncing(false);
    setToken("");
  };

  return (
    <>
      <dialog id="token_modal" className="modal modal-middle">
        <div className="modal-box modal-bg backdrop-blur-md border-2 border-orange flex flex-col items-center gap-8">
          <header className="flex flex-col items-center justify-center gap-4">
            <h3 className="font-bold text-4xl uppercase text-center">
              {lang === "es" ? "Nuevo Paciente" : "New Patient"}
            </h3>
            <hr className="mx-auto my-0 border-2 border-black w-full" />
          </header>

          {isSyncing === null ? (
            <p className="font-roboto font-normal text-xl text-black w-full text-start normal-case">
              {lang === "es"
                ? "Por medio de este enlace tendrás acceso a un nuevo paciente y sus datos de salud de forma general. Escribe el token y presiona enlazar."
                : "By using this link, you will have access to a new patient and their health data in a general format. Write the token and press sync"}
            </p>
          ) : isSyncing ? (
            <p className="font-roboto font-normal text-xl text-black w-full text-start normal-case">
              {lang === "es" ? "Sincronizando..." : "Synchronizing..."}
            </p>
          ) : (
            <p className="font-roboto font-normal text-xl text-black w-full text-start normal-case">
              {lang === "es"
                ? "¡Muy bien! Ya te haz enlazado con tu nuevo paciente, ahora podrás tener a mano toda su información de salud, y lograr una mejor experiencia en su visita."
                : "¡Great! You have successfully linked with your new patient. Now you will have access to all their health information, enabling a better experience during their visit."}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div name="token-form" className="flex flex-col items-start gap-4">
              <label htmlFor="token" className="font-roboto text-xl text-black">
                Token
              </label>
              <Input
                isDisabled={isDisabled}
                type={"text"}
                placeholder={"Token"}
                className={"w-full text-ellipsis overflow-hidden"}
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <SubmitButton addClassName={"px-10 text-2xl mt-4"}>
              {lang === "es"
                ? isSyncing
                  ? "Sincronizando..."
                  : "Enlazar"
                : isSyncing
                ? "Synchronizing..."
                : "Sync"}
            </SubmitButton>
          </form>

          <div className="py-4 px-3 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-11/12 min-w-[330px] max-h-36 flex flex-col justify-between gap-2 font-poppins">
            <h1 className="text-black text-lg pl-4 pr-1 capitalize font-medium text-nowrap overflow-hidden text-ellipsis">
              {lang === "es" ? "Nombre paciente:" : "Patient name"}
            </h1>

            <span className="text-black text-3xl pl-4 pr-1 capitalize font-bold text-nowrap overflow-hidden text-ellipsis">
              {patientName}
            </span>
          </div>

          <div className="modal-action w-full justify-center">
            <form method="dialog">
              <SubmitButton addClassName={"px-10 text-2xl"}>
              {lang === "es" ? "Aceptar" : "Acept"}
              </SubmitButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

TokenModal.propTypes = {
  isDisabled: PropTypes.string,
};

export default TokenModal;
