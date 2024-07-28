import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Auth from "./pages/Auth";
import MobileNav from "./layout/MobileNav";
import PatientRoutes from "./routes/PatientRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="mb-[70px] md:mb-0">
        <Switch>
          <Route path="/auth/:page">
            {(params) => <Auth page={params.page} />}
          </Route>

          {...PatientRoutes()}
          {/* SI TUVIERAMOS LOS DATOS DEL USUARIO, ACÁ REALIZARIAMOS LA VALIDACION DE ROLES */}
          {...DoctorRoutes()}

          {/* DEFAULT */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileNav />
    </QueryClientProvider>
  );
}

export default App;
