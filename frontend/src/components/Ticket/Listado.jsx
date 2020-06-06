import React from "react";
import Layout from "../Layout";
import useListadoTicket from "../../hooks/useListadoTicket";

const Listado = () => {
    const initialTicket = useListadoTicket();

    return(
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
            {
                initialTicket.map((item,index) => 
                    <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.nombre}</td>
                        <td>{item.ticket_pedido}</td>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Detalle</button>
                            <button className="btn btn-success btn-sm mr-2" type="submit">Editar</button>
                            <button className="btn btn-danger btn-sm" type="submit">Eliminar</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
        </table>
    );
};

export default Listado;