import ProtectedRoute from './ProtectedRoute'
import {
  HealthData,
  MedicalHistory,
  Medications,
  Patologies,
  Profile,
  Vaccines,
  ReportsAndResults,
  MedicalHistoryDetails,
  MedicationDetail,
  TreatmentsMenu
} from "../pages/patient"

const PatientRoutes = () => {

  return [
    <ProtectedRoute path="/mis-vacunas" component={Vaccines} />,

    <ProtectedRoute path="/historial-clinico" component={MedicalHistory} />,

    <ProtectedRoute path="/mis-patologias" component={Patologies} />,

    <ProtectedRoute path="/mis-datos-de-salud" component={HealthData} />,

    <ProtectedRoute path="/informes-y-resultados" component={ReportsAndResults} />,

    <ProtectedRoute path="/historia-clinica/:specialty" component={MedicalHistoryDetails} />,

    <ProtectedRoute path="/mis-tratamientos" component={TreatmentsMenu} />,

    <ProtectedRoute path="/mis-medicamentos" component={Medications} />,

    <ProtectedRoute path="/mis-medicamentos/:mid">
      {(params) => <MedicationDetail mid={params.mid} />}
    </ProtectedRoute>,

    <ProtectedRoute path="/mi-perfil" component={Profile} />

  ]
}

export default PatientRoutes