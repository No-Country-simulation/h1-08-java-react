import { useState } from "react"
import ProfileForm from "../components/molecules/ProfileForm"
import useAuthStore from "../store/auth-store"
import useLanguage from "../hooks/useLanguage"

const Profile = () => {
    const lang = useLanguage()
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const user = useAuthStore(state => state.user)
    const handleState = () => setIsFormDisabled(!isFormDisabled)
    const onSubmitForm = (data) => {
        console.log(data);
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

            <div className="py-5 px-4 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black  w-fit mb-10 mx-auto max-h-24 flex flex-wrap justify-evenly gap-2 md:gap-10 font-poppins">
                <h2 className="font-bold">
                    {user?.name} {user?.lastName}
                </h2>
                <p>
                    {lang === "es" ? "Documento" : "Document"}:
                    <span className="font-semibold pl-2">
                        {user?.dni}
                    </span>
                </p>
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