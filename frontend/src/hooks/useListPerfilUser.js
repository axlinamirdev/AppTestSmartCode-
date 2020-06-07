import { useState, useEffect } from "react";
import axios from "axios";

const useListPerfilUser = () => {
    const [ usuario, setUsuario ] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get("http://localhost:5000/api/user/list")
                                .then(res => {
                                    const data = res.data.user;
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

export default useListPerfilUser;