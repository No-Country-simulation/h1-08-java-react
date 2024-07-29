import WelcomeCard from "../../components/atoms/WelcomeCard";
import Carrousel from "../../components/organisms/Carousel";
import MyOptions from "../../components/organisms/MyOptions";

const Home = () => {
  return (
    <section className="container flex flex-col justify-center items-center px-5 py-7 gap-6">
      <WelcomeCard name={"Yanira Andrea Martinez Garcia"} genre={"f"}/>
      <Carrousel />
      <MyOptions />
    </section>
  );
};

export default Home;
