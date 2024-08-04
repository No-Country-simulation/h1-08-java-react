import useLanguage from "../../hooks/useLanguage"
import ActionBtnCard from "./ActionBtnCard"

const HeaderClinicalHistory = ({ user }) => {
    const lang = useLanguage()

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
            <div className="px-6 py-4 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black text-xl w-10/12 min-w-[330px] h-36 flex flex-col justify-between font-poppins">
                <p>{lang === "es" ? "Paciente" : "Patient"}</p>
                <h2 className="font-bold">
                    {/* {user?.name} {user?.lastName} */}
                    {"Yanira Andrea Martinez Garcia"}
                </h2>
                <p>
                    {lang === "es" ? "Documento" : "Document"}:
                    <span className="font-semibold pl-2">
                        {user?.dni ?? "123456789"}
                    </span>
                </p>
            </div >

            <ActionBtnCard
                title={<>
                    {lang === "es" ? "fecha: " : "date: "}
                    {new Date().toLocaleDateString()}
                </>}
                buttonText={lang === "es" ? "Generar Historia Clínica" : "Generate Clinical History"}
                titleSize="text-xl text-left w-full"
                buttonClassName="w-full md:w-10/12"
            // onClickOpen={() => document.getElementById("token_modal").showModal()}
            />
        </div>)
}

export default HeaderClinicalHistory