import { Dashboard, Patients } from "../pages/doctor";
import ProtectedRoute from "./ProtectedRoute";
import useAuthStore from "../store/auth-store"

const DoctorRoutes = () => {
  // const prefix = "/doctor"
  const role = useAuthStore(state => state.user?.role) ?? "off"
  // const customPath = (path) => `${prefix}${path}`
  if (role != "DOCTOR") return false;

  return [
    <ProtectedRoute path={"/"} component={Dashboard} />,
    <ProtectedRoute path={"/pacientes"} component={Patients} />,
  ]
}

export default DoctorRoutes;
