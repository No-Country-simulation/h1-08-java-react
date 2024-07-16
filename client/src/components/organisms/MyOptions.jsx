import CardButton from "../molecules/CardButton";
import { stethoscope, electrocardiogram, doctor, capsule } from "../../assets";

const MyOptions = () => {
  return (
    <div>
      <h1 className="text-textColor text-2xl font-poppins font-semibold">
        Mi carpeta de salud
      </h1>
      <div className="grid grid-cols-2 gap-4 py-5">
        <CardButton title="Vacunas" image={electrocardiogram} link="/vacunas" />
        <CardButton title="Medicamentos" image={capsule} link="#" />
        <CardButton title="Historial Clínico" image={stethoscope} link="/historial" />
        <CardButton title="Mis Citas" image={doctor} link="#" />
      </div>
    </div>
  );
};

export default MyOptions;
