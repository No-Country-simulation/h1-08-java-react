import useLanguage from "../../hooks/useLanguage"
import { useLocation } from "wouter"

const es_fakeButtons = ["ver h. clínica", "crear cita", "eliminar"]
const en_fakeButtons = ["see clinical h.", "create appointment", "delete"]

const PatientCard = ({ patient }) => {
    const [location, setLocation] = useLocation()
    const lang = useLanguage()
    const buttons = lang === "es" ? es_fakeButtons : en_fakeButtons
    const onClick = (index) => {
        if (index === 0) {
            setLocation(`/pacientes/${patient.id}/historia-clinica`)
        }
    }

    return (
        <div className="text-black px-4 py-5 rounded-2xl bg-light backdrop-blur-sm card-shadow-static border border-orange transition ease w-11/12 flex items-center justify-between">

            <h5 className="text-3xl font-semibold text-center">
                {patient.firstName} {patient.lastName}
            </h5>

            <div className="flex gap-2 md:gap-3.5 flex-wrap justify-end">

                {
                    buttons.map((item, index) => (
                        <button key={`patient-btn-${index}`} type="button" onClick={() => onClick(index)}
                            className={`bg-light text-magenta border-magenta hover:text-accent hover:border-accent capitalize transition ease duration-200 border-2 py-2 w-[160px] md:w-[190px] rounded-xl text-xl font-medium font-poppins
                                ${index !== 0 && "is-disabled"}`}
                        >
                            {item}
                        </button>
                    ))
                }

            </div>
        </div>
    )
}

export default PatientCard