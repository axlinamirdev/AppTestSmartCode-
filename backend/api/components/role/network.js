const express = require('express');
const Controller = require("./index.js");
const router = express.Router();

//Función para visualizar los roles
const viewAll = (req, res) => {
    Controller.searchAll(req.body)
    	.then(list =>{
			res.json({"respuesta":true, list});
    	})
    	.catch((err) => {
			res.json({"message":"Hubo un error en el servidor"});
    	});
};

//Ruta para visualizar todos los roles
router.get("/", viewAll);

module.exports = router;