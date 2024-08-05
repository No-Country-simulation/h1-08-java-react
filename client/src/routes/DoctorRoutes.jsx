/* eslint-disable react/jsx-key */
import { Dashboard, Patients } from "../pages/doctor";
import ProtectedRoute from "./ProtectedRoute";
import useAuthStore from "../store/auth-store"
import roles from "../data/roles";
import DetailMedicalHistory from "../pages/doctor/patients/clinical-history/DetailClinicalHistory";
import CreateClinicalHistory from "../pages/doctor/patients/clinical-history/CreateClinicalHistory";

const DoctorRoutes = () => {
  const role = useAuthStore(state => state.user?.role) ?? "off"
  if (role != roles[1].value) return false;

  return [
    <ProtectedRoute path={"/"} component={Dashboard} />,
    <ProtectedRoute path={"/pacientes"} component={Patients} />,
    <ProtectedRoute path={"/pacientes/:id/historia-clinica"}>
      {(params) => <DetailMedicalHistory id={params.id} />}
    </ProtectedRoute>,
    <ProtectedRoute path={"/pacientes/:id/historia-clinica/nueva"}>
      {(params) => <CreateClinicalHistory id={params.id} />}
    </ProtectedRoute>,
  ]
}

export default DoctorRoutes;