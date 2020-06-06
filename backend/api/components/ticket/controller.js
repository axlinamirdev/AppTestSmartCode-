const TABLA ="ticket";

module.exports =(injectedStore) => {
	let store = injectedStore;

	if(!store){
		store = require("../../../store/mysql.js");
	}

	const listaTicketAsignado = (id_user) => {
		return store.rowMultiple(TABLA,  { id_user: id_user });
    }
    
    const solicitarTicket = async (body) => {

        const ticket = {
            id_user: body.id_user,
            ticket_pedido: 0,
        }

       return store.postinsert(TABLA, ticket);        
    };
    


	return { 
        listaTicketAsignado,
        solicitarTicket
	};
}

