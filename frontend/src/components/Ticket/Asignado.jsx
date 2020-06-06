import React from "react";
import useListaTicket from "../../hooks/useListaTicketAsignado";
import { useState } from "react";
import axios from "axios";

const Asignado = () => {
    const initialTicket = useListaTicket(26);
    
    const handleClick = async () => {
        const data ={
            id_user:26,
            ticket_pedido:0
        };

        const result = await axios.post("http://localhost:5000/api/ticket",data)
                                .then(response=>{
                                if (response.data.status===200) {
                                    alert("Ha realizado la solicitud");
                                }
                                else {
                                    alert("Hubo un error");
                                }
                                }).catch(error=>{
                                    alert("Error 34 "+error)
                                });
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
                                initialTicket.map((item, index) => 
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Asignado;