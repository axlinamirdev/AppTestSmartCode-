import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Listado from "../components/Ticket/Listado";

const PerfilAdmin = () => {
    
    return(
        <Layout>
            <div className="starter-template">
                <h1>Asignación de Ticket</h1>
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
                    <Listado />
                </div>
            </div>    
        </Layout>
    );
};

export default PerfilAdmin;