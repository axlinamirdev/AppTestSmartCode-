const express = require('express');

const response = require('../../../network/response');
const Controller = require("./index.js");

const router = express.Router();

//Función para visualizar los ticket que tiene asignado un usuario
const listAssigned = (req, res) => {
    //response.send('Todo correcto');
    Controller.listTickerForUser(req.params.id)
    	.then(ticket =>{
			res.json({"respuesta":true, ticket});
    	})
    	.catch((err) => {
    		res.json({"message":"Hubo un error en el servidor"});
    	});
    ;
};
//Función para solicitar un ticket
const applyFor = (req, res) => {
    Controller.applyForTicket(req.body)
    	.then(user =>{
			res.json({"respuesta":true, user});
    	})
    	.catch((err) => {
    		res.json({"message":"Hubo un error en el servidor"});
    	});
};
//Función para visualizar todos los ticket
const listTicket = (req, res) => {
    //response.send('Todo correcto');
    Controller.listAllTicket()
		.then((lista) => {
			res.json({"respuesta":true, lista});
		})
		.catch((err) =>{
			res.json({"message":"Hubo un error en el servidor"});
		});
    ;
};
//Función para eliminar
const deleteTicket = (req, res) => {
    Controller.deleteTicket(req.body)
    	.then(ticket =>{
			res.json({"respuesta":true, ticket});
    	})
    	.catch((err) => {
    		res.json({"message":"Hubo un error en el servidor"});
    	});
    ;
};

const update = (req, res) => {
    //response.send('Todo correcto');
    Controller.asignarTicket(req.body)
    	.then(user =>{
    		response.success(req, res, user, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
};


router.get("/:id", listAssigned);
router.post("/", applyFor);
router.get("/", listTicket);
router.put("/", update);
router.post("/delete", deleteTicket);


module.exports = router;