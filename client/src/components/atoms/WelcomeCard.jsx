import useLanguage from "../../hooks/useLanguage"
import useAuthStore from "../../store/auth-store"


/* eslint-disable react/prop-types */
const WelcomeCard = () => {
  const lang = useLanguage()
  const { name, lastName, role, gender } = useAuthStore(state => state.user)

  return (
    <div className="p-6 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-8/12 min-w-[330px] h-36 flex flex-col justify-between gap-2 font-poppins">

      <h2 className="text-black text-xl md:text-2xl">
        {
          !gender
            ? lang === "es" ? "Bienvenido " : "Welcome "
            : gender === "FEMALE"
              ? lang === "es" ? "Bienvenida " : "Welcome "
              : lang === "es" ? "Bienvenido " : "Welcome "
        }
        {role && ((role === "DOCTOR") && (gender === "f" ? "Doctora" : "Doctor"))}
      </h2>

      <p className="text-black text-2xl md:text-3xl pl-4 pr-1 capitalize font-medium text-nowrap overflow-hidden text-ellipsis">
        {name ?? "Usuario"}  {lastName ?? "Invitado"}
      </p>

      {
        role && (role === "DOCTOR" &&
          <p className="text-black text-lg md:text-xl text-nowrap overflow-hidden text-ellipsis">
            {lang === "es" ? "N° de matricula" : "N° doctor certificate"}
            : 3594594-76496749
          </p>
        )}

    </div >
  )
}

export default WelcomeCard