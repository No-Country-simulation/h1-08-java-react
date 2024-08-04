import { useState } from "react"
import ProfileForm from "../components/molecules/ProfileForm"
import useAuthStore from "../store/auth-store"
import useLanguage from "../hooks/useLanguage"
import { fetchData } from "../data/fetchData"
import roles from "../data/roles"

const Profile = () => {
    const MODE = import.meta.env.VITE_MODE

    const lang = useLanguage()
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const user = useAuthStore(state => state.user)
    const handleState = () => setIsFormDisabled(!isFormDisabled)

    const onSubmitForm = async (data) => {
        if (MODE === "only-front") { return console.log(data) }

        const role = data.role.toLowerCase().includes("doctor") ? "doctor" : "patient"

        // const response = await fetchData(`${role}/`, "PUT", data)
        // console.log(response);
    }

    return (
        <section>
            <div className="flex justify-between w-8/12 min-w-[330px] items-center mx-auto">
                <h1 className="uppercase font-bold font-poppins color-black  text-center text-4xl my-5">
                    Perfil
                </h1>

                <button type="button" onClick={handleState}
                    className={`btn
                         ${isFormDisabled
                            ? "bg-magenta text-orange hover:text-accent hover:bg-magenta"
                            : "bg-[#e40404] text-gray hover:bg-[#e40404] hover:text-white"
                        }`}
                >
                    {isFormDisabled ? 'Editar perfil' : 'Cancelar'}
                </button>


            </div>
            <div className="flex flex-wrap mx-auto w-8/12 min-w-[330px] mb-10 gap-5">
                <div className="py-5 px-4 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black text-xl min-w-[250px] mx-auto max-h-24 flex flex-col gap-2  font-poppins">
                    <h2 className="font-bold">
                        {user?.name} {user?.lastName}
                    </h2>
                    <p className="pl-4">
                        {lang === "es" ? "Documento" : "Document"}:
                        <span className="font-semibold pl-2">
                            {user?.dni}
                        </span>
                    </p>
                </div>

                {user.role === roles[1].value && (
                    <div className="py-5 px-4 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black text-xl  w-2/5 min-w-[250px] mx-auto max-h-24 flex flex-col gap-2  font-poppins">
                        <h2 className="font-bold">
                            {lang === "es" ? "Especialidad" : "Speciality"}
                        </h2>
                        <p className="pl-4">
                            {lang === "es" ? "Cardiologia" : "Cardiology"}
                        </p>
                    </div>
                )}
            </div>

            <ProfileForm
                isDisabled={isFormDisabled}
                userData={user}
                onSubmitForm={onSubmitForm}
                handleState={handleState}
            />

        </section >
    )
}

export default Profile