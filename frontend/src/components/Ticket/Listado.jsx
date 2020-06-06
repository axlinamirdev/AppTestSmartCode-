import React from "react";
import Layout from "../Layout";
import useListadoTicket from "../../hooks/useListadoTicket";
import axios from "axios";

const Listado = () => {
    const initialTicket = useListadoTicket();

    const handleClickAsignar = async (id) => {
        const data = {
            id: id,
            ticket_pedido: 1
        }

        const result = await axios.put("http://localhost:5000/api/ticket",data)
                                .then(response=>{
                                if (response.data.status===200) {
                                    alert("Se ha asignado el ticket");
                                }
                                else {
                                    alert("Hubo un error");
                                }
                                }).catch(error=>{
                                    alert("Error 34 "+error)
                                });
    }

    const handleClickEliminar = async (id) => {
        const data ={id};
        const result = await axios.post("http://localhost:5000/api/ticket/delete",data)
                                .then(response=>{
                                if (response.data.status===200) {
                                    alert("Se ha eliminado el ticket");
                                }
                                else {
                                    alert("Hubo un error");
                                }
                                }).catch(error=>{
                                    alert("Error 34 "+error)
                                });

    }

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
                            <button className="btn btn-warning btn-sm mr-2" type="button" onClick={() => handleClickAsignar(item.id)}>Asignar</button>
                            <button className="btn btn-danger btn-sm" type="button" onClick={() => handleClickEliminar(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
        </table>
    );
};

export default Listado;