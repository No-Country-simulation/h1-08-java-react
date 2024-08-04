import CardButton from "../molecules/CardButton";
import { stethoscope, electrocardiogram, doctor, capsule } from "../../assets";

const MyOptions = () => {
  return (
    <div>
      <h1 className="text-textColor text-2xl font-poppins font-semibold">
        Mi carpeta de salud
      </h1>
      <div className="grid grid-cols-2 md:gap-12 gap-4 py-5">
        <CardButton title="Mis Vacunas" image={electrocardiogram} link="/mis-vacunas" />
        <CardButton title="Mis Tratamientos" image={capsule} link="/mis-tratamientos" />
        <CardButton addClassName={"is-disabled"} title="Mis Citas" image={doctor} link="#" />
        <CardButton title="Mi Historial Clínico" image={stethoscope} link="/historial-clinico" />
      </div>
    </div>
  );
};

export default MyOptions;
