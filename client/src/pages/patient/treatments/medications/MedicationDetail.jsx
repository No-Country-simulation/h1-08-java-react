import CardDose from "../../../../components/molecules/CardDose";
import CardMedication from "../../../../components/molecules/CardMedication"
import fake_medications from "../../../../data/fake_medications"


const MedicationDetail = ({ mid }) => {
    const medication = fake_medications.find((medication) => medication.name == mid)

    return (
        <section className="flex flex-wrap justify-evenly items-center gap-10 my-12 py-5 px-2">

            <CardMedication medication={medication} />
            <CardDose totalAmount={medication.amount} frequency={8} />

        </section>

    )
}

export default MedicationDetail