import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import { Redirect, Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Auth from "./pages/Auth";
import MobileNav from "./layout/MobileNav";
import PatientRoutes from "./routes/PatientRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";
import useAuthStore from "./store/auth-store";


const queryClient = new QueryClient()

function App() {
  const patientRoutes = PatientRoutes()
  const doctorRoutes = DoctorRoutes()
  const isLogged = useAuthStore(state => state.isLogged)

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="mb-[70px] md:mb-0">
        <Switch>
          <Route path="/auth/:page">
            {(params) => <Auth page={params.page} />}
          </Route>

          {doctorRoutes ? <>{...doctorRoutes}</> : patientRoutes && <>{...patientRoutes}</>}

          {!isLogged && <Route><Redirect to={"/auth/iniciar-sesion"} /></Route>}

          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileNav />
    </QueryClientProvider>
  );
}

export default App;
