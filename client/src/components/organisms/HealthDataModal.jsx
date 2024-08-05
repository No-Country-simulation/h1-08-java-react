import HealthData from "../../pages/patient/medical-history/healt-data/HealthData"

const HealthDataModal = () => {
    return (
        <dialog id="health_modal" className="modal">
            <div className="modal-box modal-bg backdrop-blur-md border-2 border-orange max-w-4/4">
                <h3 className="text-4xl font-bold border-b-4 w-full text-center uppercase p-2">datos importantes</h3>
                <HealthData isModal={true} />

                < div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-secondary text-xl">Cerrar</button>
                    </form>
                </div>
            </div>
        </dialog >
    )
}

export default HealthDataModal