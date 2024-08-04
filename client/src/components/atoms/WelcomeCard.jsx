import useLanguage from "../../hooks/useLanguage"

/* eslint-disable react/prop-types */
const WelcomeCard = ({ name, genre, role }) => {
  const lang = useLanguage()

  return (
    <div className="py-4 px-3 rounded-xl bg-light backdrop-blur-sm shadowCard border border-orange text-black  w-8/12 min-w-[330px] max-h-36 flex flex-col justify-between gap-2 font-poppins">

      <h2 className="text-black text-xl md:text-2xl">
        {genre === "f"
          ? lang === "es" ? "Bienvenida " : "Welcome "
          : lang === "es" ? "Bienvenido " : "Welcome "
        }
        {(role === "doctor") && (genre === "f" ? "Doctora" : "Doctor")}
      </h2>

      <p className="text-black text-2xl md:text-3xl px-1 capitalize font-medium text-nowrap overflow-hidden text-ellipsis">
        {name}
      </p>

      {
        role === "doctor" &&
        <p className="text-black text-lg md:text-xl text-nowrap overflow-hidden text-ellipsis">
          {lang === "es" ? "N° de matricula" : "N° doctor certificate"}
          : 3594594-76496749
        </p>
      }

    </div >
  )
}

export default WelcomeCard