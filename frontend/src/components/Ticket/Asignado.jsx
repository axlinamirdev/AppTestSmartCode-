import React from "react";
import useListaTicket from "../../hooks/useListaTicketAsignado";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Toastr from 'toastr2';

const toastr = new Toastr();

const Asignado = () => {
    const usuario = JSON.parse(localStorage.getItem('user'));

    const initialTicket = useListaTicket(usuario.id);
    
    const handleClick = async () => {
        const data ={
            id_user:usuario.id,
            ticket_pedido: 0
        };

        Swal.fire({
            title: '¿Desea solicitar un ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                const result = axios.post("http://localhost:5000/api/ticket",data)
                    .then(response=>{
                        if (response.data.respuesta===true) {
                            toastr.success('Ha realizado la solicitud');
                        }
                        else {
                            toastr.error("Hubo un error al solicitar el ticket");
                        }
                    }).catch(error=>{
                        toastr.error("Hubo un error");
                    });
            }
          })
    }

    return (
        <>
            <div className="starter-template">
                <h1>Ticket Asignado</h1>
            </div>
            <div className="row">
                <div className="col-4 mx-auto">
                    <div className="text-right">
                        <button className="btn btn-success btn-sm mb-4" type="button" onClick={handleClick}>Solicitar Ticket</button>
                    </div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th scope="col">Id Ticket</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                (initialTicket!==undefined) ?
                                    initialTicket?.map((item, index) => 
                                        <tr key={index}>
                                            <td scope="row">{item.id}</td>
                                        </tr>
                                    )
                                :
                                    <tr>
                                        <td>No tiene ticket asignado</td>
                                    </tr>
                                                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Asignado;