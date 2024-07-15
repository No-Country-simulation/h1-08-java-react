import CardDescription from "../components/molecules/CardDescription";
import CardButton from "../components/molecules/CardButton";
import { folder, stethoscope, electrocardiogram, doctor, capsule } from "../assets";
import { Link } from "wouter";

const HealthData = () => {
  return (
    <section className="container flex flex-col justify-center px-10 py-7 gap-6">
    <CardDescription
      image={folder}
      title="Mis Datos de  Salud"
    />
    <div className="grid grid-cols-2 gap-4 py-5">
        <Link to="#">
          <CardButton title="Colesterol HDL" image={electrocardiogram} link="#" />
        </Link>
        <Link to="#">
          <CardButton title="Medicamentos" image={capsule} link="#" />
        </Link>
        <Link to="#">
          <CardButton title="Mis Citas" image={doctor} link="#" />
        </Link>
        <Link to="historial">
          <CardButton title="Historial Clínico" image={stethoscope} link="#" />
        </Link>
      </div>
  </section>
  )
}

export default HealthData