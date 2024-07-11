import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />

          {/* Ejemplo de uso con params */}
          <Route path="/user/:name">
            {(params) => <>Hello, {params.name}!</>}
          </Route>

          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
