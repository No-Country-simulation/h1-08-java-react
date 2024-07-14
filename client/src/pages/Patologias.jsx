import CardDescription from "../components/molecules/CardDescription";
import { lupaIcon, arrowDown, medicine } from "../assets";

const Patologias = () => {
  return (
    <section className="container flex flex-col justify-center px-10 py-7 gap-6">
      <CardDescription
        image={medicine}
        title="Mis Patologías"
        description="Los datos que se presentan son condiciones de salud identificados en Atención Primaria."
      />
      <div className="flex flex-col gap-2">
        <details className="dropdown">
          <summary className="btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[349px] h-[72px] px-4">
            <div className="flex flex-row items-center gap-2">
            <img src={lupaIcon} alt="icon" className="size-10" />
            Cefalea
            </div>
            <img src={arrowDown} alt="arrow icon" className="size-10" />
          </summary>
          <ul className="menu dropdown-content bg-light backdrop-blur-sm rounded-box z-[1] w-[349px] p-2 shadow">
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">En curso</div>
            </li>
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">Cerrado</div>
            </li>
          </ul>
        </details>

        <details className="dropdown">
          <summary className="btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[349px] h-[72px] px-4">
          <div className="flex flex-row items-center gap-2">
            <img src={lupaIcon} alt="icon" className="size-10" />
            Gripe
          </div>
            <img src={arrowDown} alt="arrow icon" className="size-10" />
          </summary>
          <ul className="menu dropdown-content bg-light backdrop-blur-sm rounded-box z-[1] w-[349px] p-2 shadow">
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">En curso</div>
            </li>
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">Cerrado</div>
            </li>
          </ul>
        </details>

        <details className="dropdown">
          <summary className="btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[349px] h-[72px] px-4">
          <div className="flex flex-row items-center gap-2">
            <img src={lupaIcon} alt="icon" className="size-10" />
            Gastritis
          </div>
            <img src={arrowDown} alt="arrow icon" className="size-10" />
          </summary>
          <ul className="menu dropdown-content bg-light backdrop-blur-sm rounded-box z-[1] w-[349px] p-2 shadow">
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">En curso</div>
            </li>
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">Cerrado</div>
            </li>
          </ul>
        </details>

        <details className="dropdown">
          <summary className="btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[349px] h-[72px] px-4">
          <div className="flex flex-row items-center gap-2">
            <img src={lupaIcon} alt="icon" className="size-10" />
            Rinitis
          </div>
            <img src={arrowDown} alt="arrow icon" className="size-10" />
          </summary>
          <ul className="menu dropdown-content bg-light backdrop-blur-sm rounded-box z-[1] w-[349px] p-2 shadow">
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">En curso</div>
            </li>
            <li className="flex flex-row flex-nowrap items-center">
              <div className="text-xl font-roboto font-normal">12/07/2024</div>
              <div className="text-2xl font-roboto font-normal">Cerrado</div>
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
};

export default Patologias;
