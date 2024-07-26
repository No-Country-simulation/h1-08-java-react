import CardHistory from "../../components/molecules/CardHistory";
import {
  arrow,
  medicine,
  microscope_pink,
  testTube,
  personal_id,
} from "../../assets";
import useNavigation from "../../hooks/useNavigation"

function selectIcon(name) {
  switch (name) {
    case "/mis-patologias":
      return medicine
    case "/mis-datos-de-salud":
      return testTube
    case "/credenciales-y-carnets":
      return personal_id
    default:
      return microscope_pink;
  }
}

const MedicalHistory = () => {
  const navigation = useNavigation()
  const role = "patient"
  const medicalHistoryRoutes = navigation.getNavigation(role)[2].sub_items
  return (
    <section className="flex flex-col gap-5 items-center mt-5 mb-20 py-5 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10 capitalize">

        {
          medicalHistoryRoutes.map((item, index) => (
            <CardHistory
              key={`treatments-${item.name}-${index}`}
              title={item.name}
              image={selectIcon(item.path)}
              icon={arrow}
              link={`${item.path}`}
            />
          ))
        }

      </div>
    </section>
  )
}

export default MedicalHistory