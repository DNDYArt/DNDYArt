const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		last_name: String
		first_name: String
		email: String
		password: String
	}
	type Feature {
		_id: ID
		name: String
		author: String
		startPrice: Int
		currentBid: Int
		description: String
		image: String
	}
	type Artist {
		_id: ID
		bio: String
		last_name: String
		first_name: String
		email: String
		password: String
		location: String
		features: [Feature]!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		artists: [Artist]
		artist(first_name: String!): Artist
		features(first_name: String): [Feature]
		feature(featureId: ID!): Feature
		me: User
	}

	type Mutation {
		addUser(
			username: String!
			last_name: String!
			first_name: String!
			email: String!
			password: String!
		): Auth
		login(email: String!, password: String!): Auth
		addArtist(
			first_name: String!
			last_name: String!
			email: String!
			password: String!
			bio: String!
			location: String!
		): Auth
		addFeature(
			name: String!
			startPrice: Int!
			currentBid: Int!
			description: String!
			image: String!
		): Feature
		removeFeature(featureId: ID!): Feature
	}
`;

module.exports = typeDefs;
