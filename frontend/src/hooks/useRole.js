import { useState, useEffect } from "react";
import axios from "axios";

const useRole = () => {
    const [ role, setRole ] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get("http://localhost:5000/api/role")
                                .then(res => {
                                    const data = res.data.list;
                                    setRole(data);
                                })
                                .catch(error => {
                                    console.log(`Hubo un error: ${error.message}`);
                                });
        }
        fecthData();
      }, []);

      return role;
}

export default useRole;