const express = require('express');

const secure = require("./secure.js");

const response = require('../../../network/response');
const Controller = require("./index.js");

const router = express.Router();

//Función para registrar un nuevo usuario
const signup = (req, res) => {
    Controller.register(req.body)
    	.then(user =>{
			if(user==false){
				res.json({"respuesta":false, "message":"El e-mail ya existe en el sistema"});
			}else{
				res.json({"respuesta":true, user});
			}
    	})
    	.catch((err) => {
			res.json({"message":"Hubo un error en el servidor"});
    	});
};

const list = (req, res) => {
    Controller.list()
		.then((lista) => {
			response.success(req, res, lista, 200);
		})
		.catch((err) =>{
			response.error(req, res, err.message, 500);
		});
    ;
};

const get = (req, res) => {
    //response.send('Todo correcto');
    Controller.get(req.params.id)
    	.then(user =>{
    		response.success(req, res, user, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
};
//Ruta para registrar
router.post("/", signup);

router.get("/", list);
router.get("/:id", get);



module.exports = router;