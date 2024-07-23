import fake_medications from "../../../data/fake_medications"


const MedicationDetail = ({ medication }) => {
    return (
        <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
            <h1 className="capitalize text-2xl font-bold mb-4">mis medicamentos: {medication}</h1>
        </section>

    )
}

export default MedicationDetail