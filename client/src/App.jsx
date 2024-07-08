import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Route, Switch } from "wouter";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
