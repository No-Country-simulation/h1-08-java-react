import CardButton from "../molecules/CardButton";
import { stethoscope, electrocardiogram, doctor, capsule } from "../../assets";
import { Link } from "wouter";

const MyOptions = () => {
  return (
    <div>
      <h1 className="text-textColor text-2xl font-poppins font-semibold">
        Mi carpeta de salud
      </h1>
      <div className="grid grid-cols-2 gap-4 py-5">
        <Link to="#">
          <CardButton title="Vacunas" image={electrocardiogram} link="#" />
        </Link>
        <Link to="#">
          <CardButton title="Medicamentos" image={capsule} link="#" />
        </Link>
        <Link to="historial">
          <CardButton title="Historial Clínico" image={stethoscope} link="#" />
        </Link>
        <Link to="#">
          <CardButton title="Mis Citas" image={doctor} link="#" />
        </Link>
      </div>
    </div>
  );
};

export default MyOptions;
