const express = require('express');

const response = require('../../../network/response');
const Controller = require("./index.js");

const router = express.Router();

router.post("/login", (req, res) => {
	console.log(`Username ${req.body.mail}`);
	Controller.login(req.body.mail, req.body.pass)
		.then((token) => {
			response.success(req, res, token, 200);
		})
		.catch((err) =>{
			response.error(req, res, err.message, 500);
		});
});
module.exports = router;