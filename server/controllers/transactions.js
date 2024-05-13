const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Transaction.find()
			.then((transactions) => res.send(transactions))
			.catch(next);
	},
	post: (req, res, next) => {
		const {user_id,data } = req.body;
		models.Transaction.create({ user_id, data})
			.then((createdTransaction) => res.send(createdTransaction))
			.catch(next);
	},

	// put: (req, res, next) => {
	// 	const id = req.params.id;
	// 	const { description } = req.body;
	// 	models.Transactions.updateOne({ _id: id }, { description })
	// 		.then((updatedTransactions) => res.send(updatedTransactions))
	// 		.catch(next);
	// },

	// delete: (req, res, next) => {
	// 	const id = req.params.id;
	// 	models.Transactions.deleteOne({ _id: id })
	// 		.then((removedTransactions) => res.send(removedTransactions))
	// 		.catch(next);
	// },
};
