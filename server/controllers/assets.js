const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Asset.find()
			.then((assets) => res.send(assets))
			.catch(next);
	},
	post: (req, res, next) => {
		const { address,description } = req.body;
		const { _id } = req.user;

		models.Asset.create({  address, description })
			.then((createdAssets) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { posts: createdAssets } }
					),
					models.Asset.findOne({ _id: createdAssets._id }),
				]);
			})
			.then(([modifiedObj, assetsObj]) => {
				res.send(assetsObj);
			})
			.catch(next);
	},
	put: (req, res, next) => {
		const id = req.params.id;
		const { address, description } = req.body;
		models.Asset.updateOne({ _id: id }, { address, description })
			.then((updatedAssets) => res.send(updatedAssets))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Asset.deleteOne({ _id: id })
			.then((removedAssets) => res.send(removedAssets))
			.catch(next);
	},
};
