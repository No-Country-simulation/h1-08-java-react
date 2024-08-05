import Vaccines from "../../pages/patient/Vaccines"

const VaccinesModal = () => {
    return (
        <dialog id="vaccines_modal" className="modal">
            <div className="modal-box modal-bg backdrop-blur-md border-2 border-orange">
                <h3 className="text-4xl font-bold border-b-4 w-full text-center uppercase p-2">vacunas</h3>
                <Vaccines isModal />

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-secondary text-xl">Cerrar</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default VaccinesModal