import { Dashboard, Patients } from "../pages/doctor";
import ProtectedRoute from "./ProtectedRoute";

const doctorRoutes = (prefix) => {
  const customPath = (path) => `${prefix}${path}`

  return [
    <ProtectedRoute path={customPath("/")} component={Dashboard} />,
    <ProtectedRoute path={customPath("/pacientes")} component={Patients} />,
  ]
}

export default doctorRoutes;
