import React from "react";
import Layout from "../Layout";

const Listado = () => {
    return(
        <>
            <div className="starter-template">
                <h1>Asignación de Ticket</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Id Ticket</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Ticket Pedido</th>
                        <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>CAROLINA PEREZ</td>
                        <td>4</td>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Detalle</button>
                            <button className="btn btn-success btn-sm mr-2" type="submit">Editar</button>
                            <button className="btn btn-danger btn-sm" type="submit">Eliminar</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>JOSE ANAYA</td>
                        <td>2</td>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Detalle</button>
                            <button className="btn btn-success btn-sm mr-2" type="submit">Editar</button>
                            <button className="btn btn-danger btn-sm" type="submit">Eliminar</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>ISIS VELA</td>
                        <td>6</td>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Detalle</button>
                            <button className="btn btn-success btn-sm mr-2" type="submit">Editar</button>
                            <button className="btn btn-danger btn-sm" type="submit">Eliminar</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Nueva Asignación</h5>
                        <form>
                        <div className="form-group">
                            <label for="id">Id Ticket</label>
                            <input type="text" className="form-control" id="id" name="id" />
                        </div>
                        <div className="form-group">
                            <label for="id_user">Usuario</label>
                            <select className="form-control" id="id_user" name="id_user">
                                <option>- Seleccione -</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mr-2">Agregar</button>
                        <button type="reset" className="btn btn-secondary">Cancelar</button>
                        </form>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Listado;