import { useState, useEffect } from "react";

const useListaUsuario = () => {
    const [ nombre, setNombre ] = useState("");
    useEffect(()=>{
        const getUser = () => {
            const usuario = JSON.parse(localStorage.getItem('user'));
            setNombre(usuario.nombre);
        }
        getUser();
    },[]);
    return nombre;
}

export default useListaUsuario;