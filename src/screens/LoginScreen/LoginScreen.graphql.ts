import {gql} from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      jwt
      user {
        id
        username
        displayName
        email
      }
    }
  }
`;
