const express = require('express');
const Controller = require("./index.js");

const router = express.Router();
//Verificar el login del usuario
router.post("/login", (req, res) => {
	Controller.login(req.body.mail, req.body.pass)
		.then((token) => {
			res.json({"respuesta":true, token});
		})
		.catch((err) =>{
			res.json({"error":err.message});
		});
});
module.exports = router;