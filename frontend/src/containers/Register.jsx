import React, { useState } from "react";
import logo from "../assets/images/react-node.png";
import { Link } from "react-router-dom";
import axios from "axios";
import useRole from "../hooks/useRole";
import Toastr from 'toastr2';
const toastr = new Toastr();

const Register = (props) => {

    const listRole = useRole();
    
    const [data, setData ] = useState({
        nombre:'',
        mail: '',
        id_tipouser:'',
        pass:'',
        repPass:''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(data.nombre==="" || data.mail==="" || data.pass==="" || data.repPass==="" || data.id_tipouser===""){
            toastr.error("Debe de completar los datos")
            return;
        }
        if(data.pass !== data.repPass){
            toastr.error("Las claves deben ser iguales")
        }else{
            const result = await axios.post("http://localhost:5000/api/user",data)
                            .then(response=>{
                            if (response.data.respuesta) {
                                toastr.success('Se ha registrado correctamente, puede iniciar sesión');
                                props.history.push("/");
                            }
                            else {
                                toastr.error(response.data.message)
                            }
                            }).catch(error=>{
                                toastr.error("Hubo un error con el servidor")
                            });
        }
    }

    const handleChange = event => {
        setData({
            ...data,
            [event.target.name]:event.target.value
        });
    }

    return(
        <>
            <div className="card form-signin" >
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                            <img className="mb-4" src={logo} alt="" width="200" height="150" />
                            <h1 className="h3 mb-3 font-weight-normal">Registro de Usuario</h1>
                            <p>App Reactjs + Nodejs + MySql </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" value={data.nombre} name="nombre" autoFocus onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">E-mail:</label>
                            <input type="text" className="form-control" id="mail" name="mail" value={data.mail} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_tipouser">Rol:</label>
                            <select className="form-control" id="id_tipouser" name="id_tipouser"  onChange={handleChange}>
                                <option>- Seleccione -</option>
                                {
                                    listRole.map((item, index) => 
                                        <option key={index} value={item.id}>{item.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Contraseña:</label>
                            <input type="password" className="form-control" id="pass" value={data.pass} name="pass" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repPass">Repetir Contraseña:</label>
                            <input type="password" className="form-control" id="repPass" name="repPass" value={data.repPass} onChange={handleChange} />
                        </div>
                        
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mr-2">Agregar</button>
                            <Link className="btn btn-secondary" to="/">
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