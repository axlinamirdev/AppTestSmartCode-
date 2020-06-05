import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Listado from "../components/Ticket/Listado";
import NuevaAsignacion from "../components/Ticket/NuevaAsignacion";

const TicketUsuario = () => {
    return(
        <Layout>
            <div className="starter-template">
                <h1>Asignación de Ticket</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    <Listado />
                </div>
                <div className="col-4">
                    <NuevaAsignacion />
                </div>
            </div>    
        </Layout>
    );
};

export default TicketUsuario;