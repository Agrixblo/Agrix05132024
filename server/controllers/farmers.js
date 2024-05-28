const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Farmer.find()
			.then((farmers) => res.send(farmers))
			.catch(next);
	},
	post: (req, res, next) => {
		const { address,description } = req.body;
		const { _id } = req.user;

		models.Farmer.create({  address, description })
			.then((createdFarmers) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { posts: createdFarmers } }
					),
					models.Farmer.findOne({ _id: createdFarmers._id }),
				]);
			})
			.then(([modifiedObj, farmersObj]) => {
				res.send(farmersObj);
			})
			.catch(next);
	},
	put: (req, res, next) => {
		const id = req.params.id;
		const { address, description } = req.body;
		models.Farmer.updateOne({ _id: id }, { address, description })
			.then((updatedFarmers) => res.send(updatedFarmers))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Farmer.deleteOne({ _id: id })
			.then((removedFarmers) => res.send(removedFarmers))
			.catch(next);
	},
};
