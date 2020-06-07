const bcrypt = require("bcrypt");

const TABLA ="usuario";

module.exports =(injectedStore) => {
	let store = injectedStore;

	if(!store){
		store = require("../../../store/mysql.js");
	}
	//Función para registrar un nuevo usuario
	const register = async (body) => {
		//Verifica que el email no exista
		const data = await store.query(TABLA, { mail: body.mail });
		//Sino existe lo agrego
		if(data==null)
		{
			const user = {
				id_tipouser: body.id_tipouser,
				nombre: body.nombre,
				mail: body.mail,
			}
	
			if (body.pass) {
				user.pass = await bcrypt.hash(body.pass, 5);
			}
	
			return store.register(TABLA, user);
		}
		return false;		
    };

	return { 
		register,	
	};
}
