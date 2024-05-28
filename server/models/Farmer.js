const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String,Mixed} = Schema.Types;

const farmerSchema = new Schema({

	address: { type: String, required: true },
	description: {type: Mixed, required: true},
	
});

module.exports = new Model("Farmer", farmerSchema);
