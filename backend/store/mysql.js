const mysql = require("mysql");

const config = require("../config.js");

const dbconf = {
	host: config.mysql.host,
	port: config.mysql.port,
	user:config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
};

//Conexion
let connection;

const handleCon = () => {
	connection = mysql.createConnection(dbconf);
	connection.connect((err) => {
		if(err){
			console.error("[db err]", err);
			setTimeout(handleCon,2000);
		}else{
			console.log("DB Connected!");
		}		
	});

	connection.on("error", err =>{
		console.error("[db err]", err);
		if(err.code === "PROTOCOL_CONNECTION_LOST"){
			handleCon();
		}else{
			throw err;
		}
	});
}

handleCon();

//Función para verificar si existe el id se actualiza o se agrega
const register = (table,data) => {
	if(data && data.id){
		return update(table,data);
	}else{
		return insert(table,data);
	}	
}
//Función para agregar un nuevo registro
const insert = (table, data) => {
	return new Promise((resolve, reject) => {
		connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) =>{
			if(err) return reject(err);

			resolve(result);
		});
	});
}
//Función para actualizar un registro
const update = (table, data) => {
	return new Promise((resolve, reject) => {
		connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data,data.id], (err, result) =>{
			if(err) return reject(err);

			resolve(result);
		});
	});
}
//Función para visualizar todos los registros
const listAll = (table) => {
	return new Promise((resolve, reject) => {
		connection.query(`SELECT * FROM ${table}`,(err, data) =>{
			if(err) return reject(err);

			resolve(data);
		});
	});
}

const get = (table, id) => {
	return new Promise((resolve, reject) => {
		connection.query(`SELECT * FROM ${table} WHERE id=${id}`,(err, data) =>{
			if(err) return reject(err);

			resolve(data);
		});
	});
}



const query = (table, query) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
			//console.log(res);
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}

const rowMultiple = (table, query) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
			console.log(res);
            if (err) return reject(err);
            resolve(res || null);
        })
    })
}

const listaTicket = (table) => {
	return new Promise((resolve, reject) => {
		connection.query(`SELECT ticket.id, usuario.nombre, ticket.ticket_pedido FROM ticket INNER JOIN usuario ON ticket.id_user = usuario.id `,(err, data) =>{
			if(err) return reject(err);

			resolve(data);
		});
	});
}

const eliminar = (table, id) => {
	return new Promise((resolve, reject) => {
		connection.query(`DELETE FROM ${table} WHERE id=?`, id, (err, result) =>{
			if(err) return reject(err);

			resolve(result);
		});
	});
}

module.exports = {
	register,
	listAll,
	get,
	query,
	rowMultiple,
	listaTicket,
	eliminar
}