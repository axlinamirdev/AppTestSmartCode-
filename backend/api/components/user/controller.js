const bcrypt = require("bcrypt");

const TABLA ="usuario";

module.exports =(injectedStore) => {
	let store = injectedStore;

	if(!store){
		store = require("../../../store/mysql.js");
	}

	const list = () => {
		return store.list(TABLA);
	}

	const get = (id) => {
		return store.get(TABLA, id);
	}

	const postinsert= async (body) => {

        const user = {
            id_tipouser: 1,
            nombre: body.nombre,
            mail: body.mail,
        }

        if (body.pass) {
            user.pass = await bcrypt.hash(data.pass, 5);
        }

        return store.postinsert(TABLA, user);

        
    };

	/**const delete = (id) => {
		return store.update(TABLA, id);
	}**/


	return { 
		list,
		get,
		postinsert
	};
}

/**module.exports = {
	list
}**/