import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import useGetNombre from "../hooks/useGetNombre";

const Menu = (props) => {
    const data = useGetNombre();
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        props.history.push("/");
    }

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">
                App SmartCode - Perfil { (parseInt(data.perfil)==1) ? "Administrador" : "Usuario" }
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <p className="text-white pt-2 pr-5">{data.nombre}</p>
                    </li>
                    <li>
                        <button className="btn btn-secondary" onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Menu);