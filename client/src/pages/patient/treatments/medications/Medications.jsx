import SectionCard from "../../../../components/molecules/SectionCard"
import { capsule, lupaIcon } from "../../../../assets"
import CardLink from "../../../../components/atoms/CardLink";
import fake_medications from "../../../../data/fake_medications"

const Medications = () => {
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <SectionCard
        sectionName="Mis Medicamentos"
        sectionIcon={capsule}
        altIcon={"medicine-icon"}
        description={`Aquí se muestran todos los medicamentos que están ligados a tus tratamientos`}
      />

      <div className="flex flex-wrap gap-5 justify-center w-9/12  min-w-[350px]">
        {
          fake_medications.map((medication, i) => (
            <CardLink
              title={medication.name}
              icon={lupaIcon}
              href={`/mis-medicamentos/${medication.name}`}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Medications