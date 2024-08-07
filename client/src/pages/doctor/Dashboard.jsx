import WelcomeCard from "../../components/atoms/WelcomeCard";
import ActionBtnCard from "../../components/molecules/ActionBtnCard";
import AgendaSection from "../../components/organisms/AgendaSection";
import useLanguage from "../../hooks/useLanguage";
import TokenModal from "./TokenModal";


const Dashboard = () => {
  const lang = useLanguage()
  return (
    <section className="w-11/12 min-w-[350px] container mx-auto flex mt-6 mb-12 flex-col items-center gap-y-11 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
        <WelcomeCard />

        <ActionBtnCard
          title={lang === "es" ? "Nuevo Paciente" : "New Patient"}
          buttonText={lang === "es" ? "Ingresar Código" : "Enter Code"}
          titleSize="text-3xl"
          buttonClassName="w-10/12"
          onClickOpen={() => document.getElementById("token_modal").showModal()}
        />
      </div>
      <AgendaSection />

      <TokenModal />
    </section>
  );
};

export default Dashboard;
