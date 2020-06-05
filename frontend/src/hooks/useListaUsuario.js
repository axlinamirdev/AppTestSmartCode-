import { useState, useEffect } from "react";
import axios from "axios";

const useListaUsuario = () => {
    const [ usuario, setUsuario ] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get("http://localhost:5000/api/user")
                                .then(res => {
                                    const data = res.data.body;
                                    setUsuario(data);
                                })
                                .catch(error => {
                                    console.log(`Hubo un error: ${error.message}`);
                                });
        }
        fecthData();
      }, []);

      return usuario;
}

export default useListaUsuario;

