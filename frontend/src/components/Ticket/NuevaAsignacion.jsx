import React from "react";
import useListaUsuario from "../../hooks/useListaUsuario.js";

const NuevaAsignacion = () => {
    
    const initialUsuarios = useListaUsuario();
    
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Nueva Asignación</h5>
                <form>
                <div className="form-group">
                    <label htmlFor="id">Id Ticket</label>
                    <input type="text" className="form-control" id="id" name="id" />
                </div>
                <div className="form-group">
                    <label htmlFor="id_user">Usuario</label>
                    <select className="form-control" id="id_user" name="id_user">
                        <option>- Seleccione -</option>
                        {
                            initialUsuarios.map((item, index) => 
                                <option key={index} value={item.id}>{item.nombre}</option>
                            )
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Agregar</button>
                <button type="reset" className="btn btn-secondary">Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default NuevaAsignacion;