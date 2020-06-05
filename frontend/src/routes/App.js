import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../containers/Login";
import TicketUsuario from "../containers/TicketUsuario";
import Register from "../containers/Register";
import TicketAsignado from "../containers/TicketAsignado";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/ticket" component={TicketUsuario} />
            <Route exact path="/listado" component={TicketAsignado} />
        </Switch>
    </BrowserRouter>
);

export default App;