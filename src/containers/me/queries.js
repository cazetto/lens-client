import gql from 'graphql-tag';

export const USER_ME_QUERY = gql`
  query UserMeQuery {
    me {
      id
      name
      email
    }
  }
`;
