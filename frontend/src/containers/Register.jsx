import React from "react";
import logo from "../assets/images/brand/bootstrap-solid.svg";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <>
            <div class="card form-signin" >
                <div class="card-body">
                    <form>
                        <div className="text-center mb-4">
                            <img className="mb-4" src={logo} alt="" width="72" height="72" />
                            <h1 className="h3 mb-3 font-weight-normal">Registro de Usuario</h1>
                            <p>App Reactjs + Nodejs + MySql </p>
                        </div>
                        <div class="form-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" />
                        </div>
                        <div class="form-group">
                            <label for="mail">E-mail:</label>
                            <input type="text" class="form-control" id="mail" name="mail" />
                        </div>
                        <div class="form-group">
                            <label for="id_tipouser">Rol:</label>
                            <select class="form-control" id="id_tipouser" name="id_tipouser">
                                <option>- Seleccione -</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="pass">Contraseña:</label>
                            <input type="password" class="form-control" id="pass" name="pass" />
                        </div>
                        <div class="form-group">
                            <label for="repPass">Repetir Contraseña:</label>
                            <input type="password" class="form-control" id="repPass" name="repPass" />
                        </div>
                        
                        <div className="text-center">
                            <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                            <Link class="btn btn-secondary" to="/">
                                Regresar
                            </Link>
                        </div>
                        <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;