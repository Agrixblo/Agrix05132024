const router = require("../routes");

module.exports = (app) => {
	app.use("/api/users", router.users);

	app.use("/api/farmers", router.farmers);

	app.use("/api/transactions", router.transactions);

	app.use("*", (req, res, next) => {
		console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};

