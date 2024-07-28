import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Auth from "./pages/Auth";
import ShareInfo from "./pages/ShareInfo";
import MobileNav from "./layout/MobileNav";
import PatientRoutes from "./routes/PatientRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
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

          <ProtectedRoute path="/" component={Home} />
          <ProtectedRoute path="/mi-informacion" component={ShareInfo} />

          {...PatientRoutes()}
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
