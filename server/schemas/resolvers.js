const { AuthenticationError } = require("apollo-server-express");
const { User, Artist, Feature } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		user: async (parent, { username }) => {
			return User.findOne({ username });
		},

		artists: async () => {
			return Artist.find().populate("features");
		},

		artist: async (parent, { first_name }) => {
			return Artist.findOne({ first_name }).populate("features");
		},

		features: async (parent, { first_name }) => {
			const params = first_name ? { first_name } : {};
			return Feature.find(params).sort({ startPrice: -1 });
		},

		feature: async (parent, { featureId }) => {
			return Feature.findOne({ _id: featureId });
		},

		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate();
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},

	Mutation: {
		addUser: async (
			parent,
			{ first_name, last_name, username, email, password }
		) => {
			const user = await User.create({
				first_name,
				last_name,
				username,
				email,
				password,
			});
			const token = signToken(user);
			return { token, user };
		},

		addArtist: async (
			parent,
			{ first_name, last_name, location, email, password, bio }
		) => {
			const artist = await Artist.create({
				first_name,
				last_name,
				location,
				email,
				password,
				bio,
			});
			const token = signToken(artist);
			return { token, artist };
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError(
					"No user found with this email address"
				);
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolvers;

