const express = require('express');

const response = require('../../../network/response');
const Controller = require("./index.js");

const router = express.Router();

const lista = (req, res) => {
    //response.send('Todo correcto');
    Controller.listaTicketAsignado(req.params.id)
    	.then(ticket =>{
    		response.success(req, res, ticket, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
    ;
};

const solicitar = (req, res) => {
    Controller.solicitarTicket(req.body)
    	.then(user =>{
    		response.success(req, res, user, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
};


router.get("/:id", lista);
router.post("/", solicitar);


module.exports = router;