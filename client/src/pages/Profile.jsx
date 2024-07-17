import ProfileForm from "../components/molecules/ProfileForm"

const Profile = () => {
    return (
        <section>
            <h1 className="uppercase font-bold font-poppins color-black  text-center text-4xl my-5">
                Perfil
            </h1>
            <p className="text-center text-lg text-normal font-roboto p-5">
                Tus datos están incompletos. Rellena los campos pendientes y asi mantendrás tu perfil actualizado.
            </p>

            <ProfileForm />
        </section>
    )
}

export default Profile