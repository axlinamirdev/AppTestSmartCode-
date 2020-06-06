const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const TABLA = 'usuario';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    const login = async (mail, pass) => {
    	const data = await store.query(TABLA, { mail: mail });

        if (await bcrypt.compare(pass, data.pass)) {
            delete data.pass
            return auth.sign(data)
          } else {
            thrownewError('Invalid information')
          }
    }

    

    return {
        login
    };
};