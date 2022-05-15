const { Feature } = require("../models");

module.exports = {
	async createFeature(req, res) {
		const feature = await Feature.create(req.body);

		if (!user) {
			return res
				.status(400)
				.json({ message: "Unable to create Feature" });
		}

		res.status(200).json(feature);
	},

	async getAllFeatures(req, res) {
		const features = await Feature.find({});

		if (!features) {
			return res.status(400).json({ message: "No DNDY found" });
		}

		res.status(200).json(features);
	},

	async purchaseOutFeature(req, res) {
		const feature = await Feature.findOneAndDelete({ _id: req.body._id });

		if (!feature) {
			return res.status(400).json({ message: "No DNDY found" });
		}

		res.status(200).json(feature);
	},
};
