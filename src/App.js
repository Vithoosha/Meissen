import "./App.scss";
import { Navbar, Menu, Footer } from "./components";
import { Home, Error, Product } from "./pages";
import { useContext, useState } from "react";
import { ProductsContext } from "./store/context/ProductsProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const manageMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Router>
      <div className="App">
        <Navbar manageMenu={manageMenu} isOpen={isMenuOpen} />
        <Menu isOpen={isMenuOpen} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
