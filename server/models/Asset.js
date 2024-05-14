const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String} = Schema.Types;

const assetSchema = new Schema({

	address: { type: String, required: true },
	description: {type: Array, required: true},
	
});

module.exports = new Model("Asset", assetSchema);
