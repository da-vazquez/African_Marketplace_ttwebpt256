const db = require("../../database/db")

function find(){
	return db("users")
		.select("*")
}

function findBy(filter){
	return db("users")
		.select("*")
		.where(filter)
}

function findById(id){
	return db("users")
		.select("*")
		.where({ id })
		.first()
}

async function add(user){
	const [newUser] = await db("users").insert(user, "*")
	return newUser
}

module.exports = {
	find,
	findBy,
	findById,
	add,
}