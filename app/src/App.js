import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import Template from "./pages/Template";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/template" component={Template} />
        <Route exact path="/account" component={MyAccount} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
