import { useState } from "react"
import ProfileForm from "../../components/molecules/ProfileForm"

const Profile = () => {
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const handleState = () => setIsFormDisabled(!isFormDisabled)
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

            <ProfileForm isDisabled={isFormDisabled} handleState={handleState} />

        </section >
    )
}

export default Profile