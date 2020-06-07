import { useState, useEffect } from "react";

const useGetNombre = () => {
    const [ nombre, setNombre ] = useState("");
    useEffect(()=>{
        const getUser = () => {
            const usuario = JSON.parse(localStorage.getItem('user'));
            if(usuario!=null)
            {
                setNombre(usuario.nombre);
            }
        }
        getUser();
    },[]);
    return nombre;
}

export default useGetNombre;