import { gql } from '@apollo/client';

export const LOGIN_COLLECTOR = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      collector {
        _id
        username
      }
    }
  }
`;

export const ADD_COLLECTOR = gql`
  mutation addCollector($username: String!, $first_name:String!, $last_name:String! $email: String!, $password: String!) {
    addCollector(username: $username,first_name:$first_name, last_name:$last_name, email: $email, password: $password) {
      token
      collector {
        _id
        username
      }
    }
  }
`;