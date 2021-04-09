import "./App.scss";
import { Navbar, Footer } from "./components";
import { Home, Error } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
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
