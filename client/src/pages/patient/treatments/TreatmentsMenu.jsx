import CardHistory from "../../../components/molecules/CardHistory";
import useNavigation from "../../../hooks/useNavigation";
import {
  arrow,
  doctor,
  capuse_pink,
  electrocardiogram_pink,
  folder_pink,
} from "../../../assets";

function selectIcon(name) {
  switch (name) {
    case "/mis-medicamentos":
      return capuse_pink;
    case "/dieta-y-nutricion":
      return folder_pink;
    case "/actividad-fisica":
      return electrocardiogram_pink;
    default:
      return doctor;
  }
}

const TreatmentsMenu = () => {
  const navigation = useNavigation();
  const role = "patient";
  const treatMentsRoutes = navigation.getNavigation(role)?.[1]?.sub_items || [];

  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10 capitalize">
        {treatMentsRoutes && treatMentsRoutes > 0 ? (
          treatMentsRoutes.map((item, index) => (
            <CardHistory
              addClassName={item.path == "#" && "is-disabled"}
              key={`treatments-${item.name}-${index}`}
              title={item.name}
              image={selectIcon(item.in_dev ?? item.path)}
              icon={arrow}
              link={`${item.path}`}
            />
          ))
        ) : (
          <div className="text-center">No tienes tratamientos disponibles.</div>
        )}
      </div>
    </section>
  );
};

export default TreatmentsMenu;
