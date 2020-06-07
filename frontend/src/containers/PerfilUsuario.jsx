import React, {useState} from "react";
import Layout from "../components/Layout";
import Asignado from "../components/Ticket/Asignado";

const PerfilUsuario = () => {

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
        <Layout>
             {
                (getUser() == 2 )  ? (
                    <Asignado />   
                ) : <h1>Lo sentimos! No tiene permiso </h1>
            }
                
        </Layout>
    );
};

export default PerfilUsuario;