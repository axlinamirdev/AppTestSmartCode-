import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Listado from "../components/Ticket/Listado";

const PerfilAdmin = (props) => {
    
    const getUser = () => {
        const usuario = JSON.parse(localStorage.getItem('user'));
        console.log(usuario.id_tipouser);
        if(Object.keys(usuario).length>0)
        {
            return usuario.id_tipouser;
        }
        return 0;
    }
    
    return(
       <>
        <Layout>
        {
            (getUser() == 1 )  ? (
                    <>
                        <div className="starter-template">
                            <h1>Asignación de Ticket</h1>
                        </div>
                        <div className="row">
                            <div className="col-12 mx-auto">
                                <Listado />
                            </div>
                        </div> 
                    </>   
            ) : <h1>Lo sentimos! No tiene permiso </h1>
        }
          </Layout>   
       </>
        
    );
};

export default PerfilAdmin;