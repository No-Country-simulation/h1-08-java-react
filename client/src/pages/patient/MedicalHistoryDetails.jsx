import { useParams } from "wouter";

const MedicalHistoryDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const { specialty } = useParams(); // Obtiene los parámetros de la URL
  const mockData = {
    "Cardiólogo": "Datos del cardiólogo",
    "Médico Cabecera": "Datos del médico de cabecera",
  };

  const details = mockData[specialty] || "No hay datos disponibles";
  
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div className="ext-black px-2 py-6 rounded-2xl bg-light backdrop-blur-sm border border-orange w-9/12 min-w-[350px] mb-5">
        <h1>Hola historia clinica</h1>
        <h1>{details}</h1>
      </div>
    </section>
  )
}

export default MedicalHistoryDetails