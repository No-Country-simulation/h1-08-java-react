import CardHistory from "../components/molecules/CardHistory";
import {
  electrocardiogram,
  arrow,
  folder,
  medicine,
  microscope,
} from "../assets";

const MedicalHistory = () => {
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <CardHistory
          title="Mis Patologías"
          image={medicine}
          icon={arrow}
          link="/mis-patologias"
        />

        <CardHistory
          title="Mis Datos de Salud"
          image={folder}
          icon={arrow}
          link="/mis-datos-de-salud"
        />

        <CardHistory
          title="Credenciales y Carnets"
          image={electrocardiogram}
          icon={arrow}
          link="#"
        />

        <CardHistory
          title="Informes y Resultados"
          image={microscope}
          icon={arrow}
          link="#"
        />
      </div>
    </section>
  );
};

export default MedicalHistory;
