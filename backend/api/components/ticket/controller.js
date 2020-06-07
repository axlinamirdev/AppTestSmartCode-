const TABLA ="ticket";

module.exports =(injectedStore) => {
	let store = injectedStore;

	if(!store){
		store = require("../../../store/mysql.js");
	}
//Visualiza todos los ticket que tiene un usuario
const listTickerForUser = (id_user) => {
		return store.rowMultiple(TABLA,  { id_user: id_user });
}
// Solicitar un ticket
const applyForTicket = async (body) => {
    const ticket = {
        id_user: body.id_user,
        ticket_pedido: 0,
    }
    return store.register(TABLA, ticket);        
};
//Visualiza todos los ticket
const listAllTicket = () => {
        return store.listTicket(TABLA);
}
//Función para eliminar un ticket
const deleteTicket = async (body) => {
    const { id } = body;
    return store.deleteData(TABLA, id);
}
//Asignar ticket
const asignedTicket = async (body) => {
    const ticket = {
        id: body.id,
        ticket_pedido: 1,
    }
    return store.register(TABLA, ticket);        
};

//Crear un nuevo ticket
const createdTicket = async (body) => {
    const ticket = {
        id_user: body.id_user,
        ticket_pedido: body.ticket_pedido,
    }
    return store.register(TABLA, ticket);        
};

return { 
    listTickerForUser,
    applyForTicket,
    listAllTicket,
    deleteTicket,
    asignedTicket,
    createdTicket
};
}

