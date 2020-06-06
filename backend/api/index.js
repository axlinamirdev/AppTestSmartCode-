const express = require('express');
const bodyParser = require("body-parser");

const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const ticket = require("./components/ticket/network");
const errors = require("../network/error.js");

const app = express();

app.use(bodyParser.json());

//Se define las rutas


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/ticket", ticket);

app.use(errors);

app.listen(config.api.port, () => {
	console.log(`Api escuchando en el puerto ${config.api.port}`);
});