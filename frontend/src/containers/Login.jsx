import React from "react";
import logo from "../assets/images/brand/bootstrap-solid.svg";
import "../assets/css/login.css";
import {Link }from "react-router-dom";

const Login = (props) => {
    const handleSubmit = () => {
        props.history.push("/ticket");
    }

    return(
        <div class="card form-signin" >
            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                        <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">App SmartCode</h1>
                        <p>App Reactjs + Nodejs + MySql </p>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="mail" className="form-control" placeholder="Usuario" required autoFocus />
                        <label htmlFor="mail">Usuario</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="pass" className="form-control" placeholder="Contraseña" required />
                        <label htmlFor="pass">Contraseña</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesíón</button>
                    <div className="form-group mb-0 pt-4">
                        <div className="col-sm-12 text-center">
                                <Link className="text-decoration-none" to="/register">
                                    <p >¿No tienes una cuenta? <br/>Regístrate Ahora</p>
                                </Link>
                        </div>
                    </div>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
                </form>
            </div>
        </div>
    );
};

export default Login;