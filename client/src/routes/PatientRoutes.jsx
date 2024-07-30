import ProtectedRoute from './ProtectedRoute'
import {
  HealthData,
  MedicalHistoryMenu,
  Medications,
  Patologies,
  Profile,
  Vaccines,
  ReportsAndResults,
  MedicalHistoryDetails,
  MedicationDetail,
  TreatmentsMenu,
  Dates,
  Home,
  ShareInfo
} from "../pages/patient"

const patientRoutes = () => {

  return [
    <ProtectedRoute path="/" component={Home} />,

    <ProtectedRoute path="/mi-informacion" component={ShareInfo} />,

    <ProtectedRoute path="/mis-vacunas" component={Vaccines} />,

    <ProtectedRoute path="/historial-clinico" component={MedicalHistoryMenu} />,

    <ProtectedRoute path="/mis-patologias" component={Patologies} />,

    <ProtectedRoute path="/mis-datos-de-salud" component={HealthData} />,

    <ProtectedRoute path="/informes-y-resultados" component={ReportsAndResults} />,

    <ProtectedRoute path="/historia-clinica/:specialty" component={MedicalHistoryDetails} />,

    <ProtectedRoute path="/mis-tratamientos" component={TreatmentsMenu} />,

    <ProtectedRoute path="/mis-medicamentos" component={Medications} />,

    <ProtectedRoute path="/mis-medicamentos/:mid">
      {(params) => <MedicationDetail mid={params.mid} />}
    </ProtectedRoute>,

    <ProtectedRoute path="/mis-citas" component={Dates} />,

    <ProtectedRoute path="/mi-perfil" component={Profile} />

  ]
}

export default patientRoutes