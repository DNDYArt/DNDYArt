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
  type Thought {
    _id: ID
    name: String
    startPrice: Number
    description: String
    image: String
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!)
    me: User
  }

  type Mutation {
    addUser(username: String!, last_name: String!, fist_name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!)
  }
`;

module.exports = typeDefs;
