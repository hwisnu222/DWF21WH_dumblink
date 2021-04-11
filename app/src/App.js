import { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { setAuthToken, API_BASE } from "./config/api";
import { UserContext } from "./context/userContext";
import PrivateRoute from "./components/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import "./iphonex.css";
import "./App.css";

import Home from "./pages/Home";
import Template from "./pages/Template";
import MyAccount from "./pages/MyAccount";
import MyLink from "./pages/MyLink";
import Preview from "./pages/PreviewLink";
import AddLink from "./pages/AddLink";
import NotFound from "./pages/404";

const client = new QueryClient();

//inisialisasi axios setiap kali direfresh
if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log("token tersedia");
}

function App() {
  const [user, dispatch] = useContext(UserContext);

  const checkToken = async () => {
    try {
      const response = await API_BASE.get("/auth");

      console.log(response.status);
      if (response.status !== 200) {
        return console.log("tidak bisa mengidentifikasi");
      }
      console.log("response auth", response);

      dispatch({ type: "LOGIN" });
    } catch (error) {
      dispatch({ type: "LOGOUT" });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/template" component={Template} />
          <PrivateRoute exact path="/account" component={MyAccount} />
          <PrivateRoute exact path="/link" component={MyLink} />
          <PrivateRoute exact path="/add/:idTemplate" component={AddLink} />
          <Route exact path="/preview/:id" component={Preview} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
