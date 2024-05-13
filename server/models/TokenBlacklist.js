const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const {String} = Schema.Types;

const tokenBlacklist = new Schema({
	token: {type: String},
});

module.exports = new Model("TokenBlacklist", tokenBlacklist);
