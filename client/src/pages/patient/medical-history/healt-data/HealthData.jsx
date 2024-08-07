import SectionCard from "../../../../components/molecules/SectionCard";
import { folder } from "../../../../assets";
import HealthDataCard from "../../../../components/molecules/HealthDataCard";

const HealthData = ({ isModal }) => {
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      {!isModal &&
        <SectionCard
          sectionName="Mis Datos de Salud"
          sectionIcon={folder}
          altIcon="folder-icon"
        />}

      <HealthDataCard isModal={isModal} />
    </section>
  )
}

export default HealthData