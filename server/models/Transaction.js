const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const {ObjectId, Array } = Schema.Types;

const transactionSchema = new Schema({
	user_id: { type: ObjectId, ref: "User",require: true },
	data: { type: Array, require: true },
	
});

module.exports = new Model("Transaction", transactionSchema);
