import React, { useState } from "react";
import useListadoTicket from "../../hooks/useListadoTicket";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import authHeader from '../../services/userservice.js';
import Toastr from 'toastr2';

const toastr = new Toastr();

const Listado = () => {
     const initialTicket = useListadoTicket();
     
     const [ticket, setTicket]=useState({});

    const handleClickAsignar =  (id) => {
        const data = {
            id: id,
            ticket_pedido: 1
        }
        Swal.fire({
            title: '¿Desea asignar el ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                const result = axios.put("http://localhost:5000/api/ticket",data, { headers: authHeader() })
                    .then(response=>{
                        if (response.data.status===200) {
                            toastr.success('Se ha asignado el ticket');
                        }
                        else {
                            toastr.warning("Hubo un error al asignar el ticket");
                        }
                    }).catch(error=>{
                        toastr.error("Hubo un error");
                    });
            }
          })
        
    }

    const handleClickEliminar =  (id) => {
        
        Swal.fire({
            title: '¿Desea eliminar el ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                const result =  axios.post("http://localhost:5000/api/ticket/delete",{id}, { headers: authHeader() })
                            .then(response=>{
                            if (response.data.status===200) {
                                toastr.success('Se ha eliminado el ticket');
                            }
                            else {
                                alert("Hubo un error al eliminar el ticket");
                            }
                            }).catch(error=>{
                                toastr.error("Hubo un error");
                            });
            }
          })
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