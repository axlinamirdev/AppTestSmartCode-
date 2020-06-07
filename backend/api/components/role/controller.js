const TABLA ="tipo_usuario";

module.exports =(injectedStore) => {
	let store = injectedStore;

	if(!store){
		store = require("../../../store/mysql.js");
	}

	const searchAll = () => {
		return store.listAll(TABLA);
	}

	return { 
		searchAll
	};
}
