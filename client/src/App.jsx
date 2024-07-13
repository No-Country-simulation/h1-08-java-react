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

          {/* Default */}
          {/* <Route component={NotFound} /> */}
          <Route path="/historial" component={Historial} />
          <Route path="/mis-patologias" component={Patologias} />
        </Switch>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
