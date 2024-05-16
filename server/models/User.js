const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Array } = Schema.Types;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},

	password: {
		type: String,
		require: true,
	},

	walletaddress: { type: String, required: true},
	transactions: {type: Array, require: false},
});

userSchema.methods = {
	matchPassword: function (password) {
		console.log("trying to matchPassword server");
		return bcrypt.compare(password, this.password);
	},
};

userSchema.pre("save", function (next) {
	if (this.isModified("password")) {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) {
					next(err);
					return;
				}
				this.password = hash;
				next();
			});
		});
		return;
	}
	next();
});
module.exports = new Model("User", userSchema);
