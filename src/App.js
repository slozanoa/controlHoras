import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./views/Login/Login";
import Formulario from "./views/Formulario/Formulario";
import { AuthContextProvider } from "./context/AuthContext";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/formulario" component={Formulario} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
