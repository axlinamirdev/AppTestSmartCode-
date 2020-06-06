import { useState, useEffect } from "react";
import axios from "axios";

const useListaTicketAsignado = (id_user) => {
    const [ ticket, setTicket ] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get(`http://localhost:5000/api/ticket/${id_user}`)
                                .then(res => {
                                    const data = res.data.body;
                                    setTicket(data);
                                })
                                .catch(error => {
                                    console.log(`Hubo un error: ${error.message}`);
                                });
        }
        fecthData();
      }, []);

      return ticket;
}

export default useListaTicketAsignado;