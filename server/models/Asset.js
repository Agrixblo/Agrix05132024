const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String} = Schema.Types;

const assetSchema = new Schema({

	walletaddress: { type: String, required: true },
	
});

module.exports = new Model("Asset", assetSchema);
