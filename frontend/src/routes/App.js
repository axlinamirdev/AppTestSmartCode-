import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import PerfilAdmin from "../containers/PerfilAdmin";
import Register from "../containers/Register";
import PerfilUsuario from "../containers/PerfilUsuario";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/ticket" component={PerfilAdmin} />
            <Route exact path="/listado" component={PerfilUsuario} />
        </Switch>
    </BrowserRouter>
);

export default App;