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
      <details className="dropdown">
        <summary className="btn m-1 bg-light hover:bg-orange/50 backdrop-blur-sm border border-orange rounded-2xl text-textColor font-poppins font-medium text-3xl justify-between items-center w-[349px] h-[72px] px-4"><img src={lupaIcon} alt="icon" className="size-10"/>Cefalea<img src={arrowDown} alt="arrow icon" className="size-10"/></summary>
        <ul className="menu dropdown-content bg-light backdrop-blur-sm rounded-box z-[1] w-[349px] p-2 shadow">
          <li className="flex flex-row flex-nowrap items-center">
            <li className="text-xl font-roboto font-normal">12/07/2024</li>
            <li className="text-2xl font-roboto font-normal">En curso</li>
          </li>
          <li className="flex flex-row flex-nowrap items-center">
            <li className="text-xl font-roboto font-normal">12/07/2024</li>
            <li className="text-2xl font-roboto font-normal">Cerrado</li>
          </li>
        </ul>
      </details>
    </section>
  );
};

export default Patologias;
