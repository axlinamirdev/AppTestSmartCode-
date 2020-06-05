import React from "react";

const Asignado = () => {
    return (
        <>
            <div className="starter-template">
                <h1>Asignación de Ticket</h1>
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
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
            </div>
        </>
    );
};

export default Asignado;