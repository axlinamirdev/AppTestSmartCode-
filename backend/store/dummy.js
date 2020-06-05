const db = {
	'user':[
		{
			id: '1', name: "carlos"
		},
		{
			id: '2', name: "teresa"
		}
	]
};

const list = async (tabla) => {
	return db[tabla] || [];
};

const get = async (tabla, id) => {
	let col =await list(tabla);
	return col.filter(item => item.id === id)[0];
};

const update = async (tabla,data) => {
	if(!db[tabla]){
		db[tabla] = [];
	}
	db[tabla].push(data);
	//return data;
	console.log(db);
};

const remove = async (tabla, id) => {
	return true;
};

const query = async  (tabla, q) => {
	let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    
    return col.filter(item => item[key] === q[key])[0] || null;
}


module.exports = {
	list,
	get,
	update,
	remove,
	query
}