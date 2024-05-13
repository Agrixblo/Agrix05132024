require("dotenv").config();
const env = process.env.NODE_ENV || "development";


const config = {
	development: {
		port: process.env.PORT || 8090,
		dbURL:process.env.DBURL,
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];
