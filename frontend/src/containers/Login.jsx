import React, { useState } from "react";
import logo from "../assets/images/react-node.png";
import "../assets/css/login.css";
import {Link }from "react-router-dom";
import axios from "axios";

import Toastr from 'toastr2';

const toastr = new Toastr();

const Login = (props) => {

    const [form, setForm ] = useState({
        mail:'',
        pass:''
    });

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit =async (event) => {
        event.preventDefault();
        const result = await axios.post("http://localhost:5000/api/auth/login",form)
                                .then(response=>{
                                if (response.data.respuesta===true) {
                                    const dataUser = response.data.token;
                                    localStorage.setItem("token",dataUser.token);
                                    localStorage.setItem("user",JSON.stringify(dataUser.info));
                                    toastr.success('Ha iniciado sesión correctamente', 'Bienvenido');
                                    if(parseInt(dataUser.info.id_tipouser)===1){ //Administrador                                        
                                        props.history.push("/ticket");
                                    }else{ //usuario
                                        console.log("entro1");
                                        props.history.push("/listado");
                                    }
                                }
                                else {
                                    toastr.error('Hubo un error, vuelva a intentarlo')
                                }
                                }).catch(error=>{
                                    toastr.error("Información Inválida")
                                });
        
    }

    return(
        <div className="card form-signin" >
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                        <img className="mb-4" src={logo} alt="" width="200" height="150" />
                        <h1 className="h3 mb-3 font-weight-normal">App SmartCode</h1>
                        <p>App Reactjs + Nodejs + MySql </p>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="mail" name="mail" className="form-control" placeholder="Usuario" onChange={handleChange} required autoFocus />
                        <label htmlFor="mail">Usuario</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="pass" name="pass" className="form-control" placeholder="Contraseña" onChange={handleChange} required />
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