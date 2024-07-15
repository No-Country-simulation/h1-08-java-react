import { Link } from "wouter";
import CardHistory from "../components/molecules/CardHistory";
import { electrocardiogram, arrow, folder, medicine, microscope } from "../assets";

const Historial = () => {
  return (
    
    <section className="container flex flex-col justify-center px-5 pb-5 gap-6">
      <div className="flex flex-col gap-5 py-5">
        <Link to="mis-patologias">
          <CardHistory title="Mis Patologías" image={medicine} icon={arrow} />
        </Link>
        <Link to="mis-datos-de-salud">
          <CardHistory title="Mis Datos de Salud" image={folder} icon={arrow} />
        </Link>
        <Link to="#">
          <CardHistory title="Credenciales y Carnets" image={electrocardiogram} icon={arrow}/>
        </Link>
        <Link to="#">
          <CardHistory title="Informes y Resultados" image={microscope} icon={arrow}/>
        </Link>
      </div>
    </section>
  )
}

export default Historial