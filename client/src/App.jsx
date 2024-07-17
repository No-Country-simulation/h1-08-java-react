import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Auth from "./pages/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";
import Vaccines from "./pages/Vaccines";
import ShareInfo from "./pages/ShareInfo";
import MedicalHistory from './pages/MedicalHistory';
import Patologies from './pages/Patologies';
import HealthData from "./pages/HealthData";
import Medications from "./pages/Medications";
import Profile from "./pages/Profile";
import MobileNav from "./layout/MobileNav";

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

          <ProtectedRoute path="/" redirectTo={"/auth/login"} component={Home} />
          <ProtectedRoute path="/mis-vacunas" redirectTo={"/auth/login"} component={Vaccines} />
          <ProtectedRoute path="/mi-informacion" redirectTo={"/auth/login"} component={ShareInfo} />
          <ProtectedRoute path="/historial" redirectTo={"/auth/login"} component={MedicalHistory} />
          <ProtectedRoute path="/mis-patologias" redirectTo={"/auth/login"} component={Patologies} />
          <ProtectedRoute path="/mis-datos-de-salud" redirectTo={"/auth/login"} component={HealthData} />
          <ProtectedRoute path="/mis-medicamentos" redirectTo={"/auth/login"} component={Medications} />
          <ProtectedRoute path="/mi-perfil" redirectTo={"/auth/login"} component={Profile} />

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
