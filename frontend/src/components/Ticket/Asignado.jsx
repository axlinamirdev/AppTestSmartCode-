import React from "react";

const Asignado = () => {
    return (
        <>
            <div className="starter-template">
                <h1>Ticket Asignado</h1>
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Id Ticket</th>
                        <th scope="col">Ticket Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Solicitar</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Solicitar</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>
                            <button className="btn btn-warning btn-sm mr-2" type="submit">Solicitar</button>
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