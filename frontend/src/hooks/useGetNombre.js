import { useState, useEffect } from "react";

const useGetNombre = () => {
    const [ nombre, setNombre ] = useState({nombre:"",perfil:0});
    useEffect(()=>{
        const getUser = () => {
            const usuario = JSON.parse(localStorage.getItem('user'));
            if(usuario!=null)
            {
                setNombre({nombre:usuario.nombre, perfil: usuario.id_tipouser});
            }
        }
        getUser();
    },[]);
    return nombre;
}

export default useGetNombre;