import { Medications } from "../../pages/patient"

const TreatmentsModal = () => {
    return (
        <dialog id="treatments_modal" className="modal">
            <div className="modal-box modal-bg backdrop-blur-md border-2 border-orange">
                <h3 className="text-4xl font-bold border-b-4 w-full text-center uppercase p-2">medicamentos</h3>
                <Medications isModal />

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-secondary text-xl">Cerrar</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default TreatmentsModal