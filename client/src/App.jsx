import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Auth from "./pages/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";
import Historial from './pages/Historial';
import Patologias from './pages/Patologias';
import HealthData from "./pages/HealthData";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Switch>
          <ProtectedRoute path="/" redirectTo={"/auth/login"} component={Home} />

          <Route path="/auth/:page">
            {(params) => <Auth page={params.page} />}
          </Route>

          <ProtectedRoute path="/historial" redirectTo={"/auth/login"} component={Historial} />
          <ProtectedRoute path="/mis-patologias" redirectTo={"/auth/login"} component={Patologias} />
          <ProtectedRoute path="/mis-datos-de-salud" redirectTo={"/auth/login"} component={HealthData} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
