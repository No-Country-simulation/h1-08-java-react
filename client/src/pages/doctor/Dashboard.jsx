import WelcomeCard from "../../components/atoms/WelcomeCard";
import ActionBtnCard from "../../components/molecules/ActionBtnCard";
import AgendaSection from "../../components/molecules/AgendaSection";

const Dashboard = () => {
  return (
    <section className="container mx-auto flex mt-6 mb-12 flex-col items-center gap-y-11 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
        <WelcomeCard />

        <ActionBtnCard
          title="Nuevo Paciente"
          buttonText="Ingresar Token"
          titleSize="text-3xl"
          buttonClassName="w-10/12"
        />
      </div>
      <AgendaSection />

    </section>
  );
};

export default Dashboard;
