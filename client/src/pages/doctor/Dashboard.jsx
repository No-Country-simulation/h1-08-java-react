import WelcomeCard from "../../components/atoms/WelcomeCard";
import ActionBtnCard from "../../components/molecules/ActionBtnCard";
import AgendaSection from "../../components/molecules/AgendaSection";

const Dashboard = () => {
  return (
    <section className="container mx-auto flex flex-col items-center gap-y-11">
      <div className="flex flex-row gap-5">
        <WelcomeCard />

        <ActionBtnCard
          title="Nuevo Paciente"
          buttonText="Ingresar Token"
          titleSize="text-4xl"
          buttonClassName="w-[387px]"
        />
      </div>
      <AgendaSection />
    </section>
  );
};

export default Dashboard;
