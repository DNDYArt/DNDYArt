const { AuthenticationError } = require('apollo-server-express');
const { Collector, Artist, Feature } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    collectors: async () => {
      return Collector.find();
    },
    collector: async (parent, { username }) => {
      return Collector.findOne({ username });
    },

    artists: async () => {
      return Artist.find().populate('features');
    },

    artist: async (parent, { first_name}) => {
      return Artist.findOne({ first_name }).populate('features');
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
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addCollector: async (parent, { first_name, last_name, username, email, password }) => {
      const collector = await Collector.create({ first_name, last_name, username, email, password });
      const token = signToken(collector);
      return { token, collector };
    },

    addArtist: async (parent, { first_name, last_name, location, email, password, bio }) => {
      const artist = await Artist.create({ first_name, last_name, location, email, password, bio });
      const token = signToken(artist);
      return { token, artist };
    },

    addFeature: async (parent, { name, authorLastName,startPrice,currentBid,description,image }, context) => {
      if (context.artist) {
        const feature = await Feature.create({
          name,
          authorFirstName: context.artist.first_name,
          authorLastName,
          startPrice,
          currentBid,
          description,
          image,
        });
        await Artist.findOneAndUpdate(
          { _id: context.artist._id },
          { $addToSet: { features: feature._id } }
        );

        return feature;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    login: async (parent, { email, password }) => {
      const collector = await Collector.findOne({ email });

      if (!collector) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await collector.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(collector);

      return { token, collector };
    },
  },
};

module.exports = resolvers;
