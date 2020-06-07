const express = require('express');
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
//Visualizar listado de usuario por el perfil user
const viewAllUser = (req, res) => {
    Controller.viewAllUser()
    	.then(user =>{
			res.json({"respuesta":true, user});
    	})
    	.catch((err) => {
    		res.json({"message":"Hubo un error en el servidor"});
    	});
    ;
};


//Ruta para registrar
router.post("/", signup);
router.get("/list", viewAllUser);

module.exports = router;