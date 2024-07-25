import SubmitButton from "../../components/atoms/SubmitButton"

const LogoutModal = ({ currentLanguage, logout }) => {
    return (<>
        < button className="btn btn-sm btn-outline btn-error capitalize"
            onClick={() => document.getElementById('my_modal_5').showModal()}
        >
            {currentLanguage === "es" ? "salir" : "exit"}
        </button >
        <dialog id="my_modal_5" className="modal modal-middle">
            <div className="modal-box border-2 border-orange">
                <h3 className="font-bold text-2xl normal-case">
                    {
                        currentLanguage === "es"
                            ? "¿Quiere cerrar sesión?"
                            : "Do you want to log out?"
                    }
                </h3>

                <p className="text-sm text-textColor/75 w-full text-start normal-case my-4">
                    {
                        currentLanguage === "es"
                            ? "Presiona la tecla ESC o haz clic en el botón 'no' para cerrar"
                            : "Press ESC key or click in the button 'not' below to close"
                    }.
                </p>
                <div className="modal-action w-full">
                    <form method="dialog">
                        <SubmitButton onClick={logout} addClassName={"px-10 mr-5"}>
                            {currentLanguage === "es" ? "si" : "yes"}
                        </SubmitButton>

                        <SubmitButton addClassName={"px-10"}>
                            {currentLanguage === "es" ? "no" : "not"}
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </dialog>
    </>)
}

export default LogoutModal