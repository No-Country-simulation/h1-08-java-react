/* eslint-disable react/prop-types */

const WelcomeCard = () => {
  return (
    <div className="font-roboto p-6 rounded-2xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-auto max-w-[632px] h-[172px]">
      <div className="flex flex-col gap-1.5 items-start justify-center">
        <h2 className="text-black text-[26px] font-roboto">Bienvenida Doctora</h2>
        <span className="text-black text-4xl font-poppins capitalize font-medium">
          Yanira andrea martinez Garcia  
        </span>
        <p className="text-black text-[26px] font-poppins">N° de matricula: 3594594-76496749</p>
      </div>
    </div>
  )
}

export default WelcomeCard