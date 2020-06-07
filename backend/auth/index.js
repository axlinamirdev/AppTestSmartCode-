const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.jwt.secret;

const sign = (data) => {
    return jwt.sign({data},secret,{expiresIn:30});
}

const verify = (token) =>{
    return jwt.verify(token, secret)
}

const destruir = (token) => {
    return jwtr.destroy(token);
}

const getToken = (auth) => {
    if (!auth) {
        throw new Error('No viene token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

const decodeHeader = (req) =>{
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);

        if (decoded.id !== owner) {
            throw new Error('No puedes hacer esto');
        }
    },
}

module.exports = {
    sign,
    check,
    destruir
};