import { gql } from '@apollo/client';

export const QUERY_COLLECTOR = gql`
  query collector($username: String!) {
    collector(username: $username) {
      _id
      username
      email
      first_name
      last_name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      first_name
      last_name
      }
    }
  }
`;