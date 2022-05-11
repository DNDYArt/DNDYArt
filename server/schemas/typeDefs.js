const { gql } = require('apollo-server-express');

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
    startPrice: Number
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
    features:[Feature]!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    features: [Feature]
    feature(featureId: ID!): Feature
    me: User
  }

  type Mutation {
    addUser(username: String!, last_name: String!, fist_name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!)
    addFeature(featureId: ID!):Feature
    removeFeature(featureId: ID!):Feature
  }
`;

module.exports = typeDefs;
