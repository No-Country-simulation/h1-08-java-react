import CardDescription from "../components/molecules/CardDescription";
import { folder } from "../assets";

const HealthData = () => {
  return (
    <section className="container flex flex-col justify-center items-center px-5 py-7 gap-6">
    <CardDescription
      image={folder}
      title="Mis Datos de  Salud"
    />
    
  </section>
  )
}

export default HealthData