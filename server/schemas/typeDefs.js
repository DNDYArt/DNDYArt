const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Collector {
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
    authorFirstName: String
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
    features:[Feature]!
  }
  
  type Auth {
    token: ID!
    collector: Collector
  }

  type Query {
    collectors: [Collector]
    collector(username: String!): Collector
    artists: [Artist]
    artist(first_name:String!): Artist
    features(first_name:String): [Feature]
    feature(featureId:ID!): Feature
    me: Collector
  }

  type Mutation {
    addCollector(username: String!, last_name: String!, first_name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!):Auth
    addArtist(first_name:String!,last_name:String!,email:String!,password:String!,bio:String!,location:String!):Auth
    addFeature(name:String!,startPrice:Int!,currentBid:Int!,description:String!,image:String! ):Feature
    removeFeature(featureId: ID!):Feature
  }
`;

module.exports = typeDefs;
