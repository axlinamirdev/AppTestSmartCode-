import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import useListPerfilUser from "../../hooks/useListPerfilUser";
import Toastr from 'toastr2';
const toastr = new Toastr();

const Listado = () => {
    const [ ticket, setTicket ] = useState([]);

    const [ infoticket, setInfoticket ]= useState({
        id: "",
        id_user:"",
        ticket_pedido:1
    });
    
    const listuser = useListPerfilUser();

    const handleChange = event => {
        setInfoticket({
            ...infoticket,
            [event.target.name]: event.target.value
        });
    }

    const fecthData = async () => {
        const response = await axios.get(`http://localhost:5000/api/ticket`)
                            .then(res => {
                                const data = res.data.lista;
                                setTicket(data);
                            })
                            .catch(error => {
                                console.log(`Hubo un error: ${error.message}`);
                            });
    }

    useEffect(() => {
        fecthData();
      }, []);
    

    const handleClickAprobar =  (id) => {
        const data = {
            id: id,
            ticket_pedido: 1
        }
        Swal.fire({
            title: '¿Desea aprobar el ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                const result = axios.put("http://localhost:5000/api/ticket",data)
                    .then(response=>{
                        if (response.data.respuesta===true) {
                            toastr.success('Se ha asignado el ticket');
                            const resultado  = ticket.filter(item => {
                                if(item.id==id) item.ticket_pedido=1;
                                
                                return item;
                            })
                            
                            setTicket(resultado);
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
                const result =  axios.post("http://localhost:5000/api/ticket/delete",{id})
                            .then(response=>{
                            if (response.data.respuesta===true) {
                                toastr.success('Se ha eliminado el ticket');
                                const result = ticket.filter(item => item.id !== id);   
                                setTicket(result);
                            }
                            else {
                                toastr.error("Hubo un error al eliminar el ticket");
                            }
                            }).catch(error=>{
                                toastr.error("Hubo un error");
                            });
            }
          })
    }

    const handleAddTicket = () => {
        const data={
            id_user: null,
            ticket_pedido: 2
        }
        Swal.fire({
            title: '¿Desea crear un ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
               const result =  axios.post("http://localhost:5000/api/ticket/create", data)
                            .then(response=>{
                            if (response.data.respuesta===true) {
                                toastr.success('Se ha creado el ticket');
                                fecthData();
                            }
                            else {
                                toastr.error("Hubo un error al crear el ticket");
                            }
                            }).catch(error=>{
                                toastr.error("Hubo un error");
                            });
            }
          })
    }

    const handleClickAsignar = (id) => {
        setInfoticket({
            ...infoticket,
            id
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        Swal.fire({
            title: '¿Desea asignar el ticket?',
            icon: 'question',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                const result = axios.put("http://localhost:5000/api/ticket/assigned",infoticket)
                    .then(response=>{
                        if (response.data.respuesta===true) {
                            toastr.success('Se ha asignado el ticket');
                            const resultado  = ticket.filter(item => {
                                if(item.id==infoticket.id) {
                                    item.ticket_pedido=1;
                                    item.id_user=infoticket.id_user;
                                }                                
                                return item;
                            })
                            
                            setTicket(resultado);
                            setInfoticket({
                                id: "",
                                id_user:"",
                                ticket_pedido:1
                            });
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

    const handleClear = () => {
        setInfoticket({
            id: "",
            id_user:"",
            ticket_pedido:1
        });
    }

    return(
        <>
            <div className="pb-3">
                <button className="btn btn-success" onClick={handleAddTicket}>Crear Ticket</button>
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
                            {
                                (ticket!==undefined) ?
                                ticket.map((item,index) => 
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.nombre}</td>
                                            <td>{(item.ticket_pedido==1) ? "Asignado" : "Pendiente"}</td>
                                            <td>
                                                {
                                                    (item.ticket_pedido==0) ? 
                                                        <>
                                                        <button className="btn btn-warning btn-sm mr-2" type="button" onClick={() => handleClickAprobar(item.id)}>Aprobar</button>
                                                        <button className="btn btn-danger btn-sm" type="button" onClick={() => handleClickEliminar(item.id)}>Eliminar</button>
                                                        </>
                                                    : (item.ticket_pedido==2) ?
                                                        <>
                                                            <button className="btn btn-info btn-sm mr-2" type="button" onClick={() => handleClickAsignar(item.id)}>Asignar</button>
                                                            <button className="btn btn-danger btn-sm" type="button" onClick={() => handleClickEliminar(item.id)}>Eliminar</button>
                                                        </>
                                                    : ""
                                                }
                                            </td>
                                        </tr>
                                )
                                : 
                                    <tr>
                                        <td>No hay  ticket disponible</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nueva Asignación</h5>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="id">Id Ticket</label>
                                <input type="text" className="form-control" id="idTicket" name="idTicket" onChange={handleChange} value={infoticket.id} disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="id_user">Usuario</label>
                                <select className="form-control" id="id_user" name="id_user" onChange={handleChange}>
                                    <option>- Seleccione -</option>
                                    {
                                        listuser.map(item => 
                                            <option key={item.id} value={item.id}>{item.nombre}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Agregar</button>
                            <button type="reset" className="btn btn-secondary" onClick={handleClear}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listado;