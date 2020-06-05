import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">App SmartCode</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/ticket">
                        Ticket <span className="sr-only">(current)</span>
                    </Link>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link className="btn btn-secondary" to="/">
                            Cerrar Sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;