const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const TABLA = 'usuario';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }
    //Función para verificar el email y password
    const login = async (mail, pass) => {
    	const data = await store.query(TABLA, { mail: mail });

        if (await bcrypt.compare(pass, data.pass)) {
            delete data.pass
            const token = auth.sign(data);
            delete data.mail
            const user = {
                info:{...data},
                token
            };
            return user;
          } else {
            throw new Error('Información Inválida')
          }
    }

    return {
        login
    };
};