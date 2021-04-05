import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import "./iphonex.css";
import "./App.css";

import { UserContextProvider } from "./context/userContext";

import Home from "./pages/Home";
import Template from "./pages/Template";
import MyAccount from "./pages/MyAccount";
import MyLink from "./pages/MyLink";
import Preview from "./pages/PreviewLink";
import AddLink from "./pages/AddLink";
import NotFound from "./pages/404";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/link" component={MyLink} />
          <Route exact path="/add" component={AddLink} />
          <Route exact path="/preview/:id" component={Preview} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
