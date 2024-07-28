import ProtectedRoute from "./ProtectedRoute";
import { Dashboard } from "../pages/doctor";

const DoctorRoutes = () => {

  return [
    <ProtectedRoute path="/Dashboard" component={Dashboard} />,
  ]
}

export default DoctorRoutes;
