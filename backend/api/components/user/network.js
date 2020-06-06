const express = require('express');

const secure = require("./secure.js");

const response = require('../../../network/response');
const Controller = require("./index.js");

const router = express.Router();

const list = (req, res) => {
    //response.send('Todo correcto');
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

const upsert = (req, res) => {
    Controller.postinsert(req.body)
    	.then(user =>{
    		response.success(req, res, user, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
};

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure('update'), upsert);
/**router.get('/delete/:id', function (req, res) {
    //response.send('Todo correcto');
    Controller.delete(req.params.id)
    	.then(user =>{
    		response.success(req, res, user, 200);
    	})
    	.catch((err) => {
    		response.error(req, res, err.message, 500);
    	});
})**/

module.exports = router;