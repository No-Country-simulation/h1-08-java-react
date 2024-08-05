import WelcomeCard from '../../../components/atoms/WelcomeCard'
import ActionBtnCard from "../../../components/molecules/ActionBtnCard";
import { arrowFilter } from "../../../assets";
import PatientCard from '../../../components/molecules/PatientCard';
import useLanguage from '../../../hooks/useLanguage';
import TokenModal from '../TokenModal';
import SearchForm from '../../../components/atoms/SearchForm';


const fakePatients = [
  {
    id: 1,
    firstName: "Pedro",
    lastName: "Alvarez",
    age: 30,
  },
  {
    id: 2,
    firstName: "Juan",
    lastName: "Ramirez",
    age: 80,
  },
]

const Patients = () => {


  const handleSubmitSearch = (e) => {
    e.preventDefault()
  }
  const lang = useLanguage()
  return (
    <section className="w-11/12 min-w-[350px] mx-auto mt-6 mb-12 py-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
        <WelcomeCard />

        <ActionBtnCard
          title={lang === "es" ? "Nuevo Paciente" : "New Patient"}
          buttonText={lang === "es" ? "Ingresar Código" : "Enter Code"}
          titleSize="text-2xl md:text-3xl text-nowrap"
          buttonClassName="w-10/12"
          onClickOpen={() => document.getElementById("token_modal").showModal()}
        />
        <TokenModal />
      </div>

      <h1 className="text-4xl font-poppins font-bold text-center my-10 p-3 border-b-4 ">
        {lang === "es" ? "PACIENTES" : "PATIENTS"}
      </h1>

      <div className="flex flex-col w-11/12 mx-auto md:flex-row justify-between my-10">
        <SearchForm handleSubmitSearch={handleSubmitSearch} />

        <div className="flex md:w-5/12 gap-4 justify-end md:mt-0 mt-5">
          <label className="font-poppins my-auto font-normal text-black text-2xl">
            {lang === "es" ? "Filtrar por" : "Filter by"}:
          </label>

          <button type="button" className="px-2.5 h-[50px] bg-transparent border border-magenta rounded-2xl text-center is-disabled">
            <img
              src={arrowFilter}
              alt="arrow icon"
              height={25} width={39}
            />
          </button>

        </div>
      </div>


      <div className="flex flex-col gap-8 items-center justify-center">
        {
          fakePatients.map((patient, i) => (
            <PatientCard key={`${i}-${patient.lastName}`} patient={patient} />
          ))
        }
      </div>



    </section>
  )
}

export default Patients