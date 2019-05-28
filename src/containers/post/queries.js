import gql from 'graphql-tag';

export const POST_QUERY = gql`
  query PostQuery($id: ID, $slug: String) {
    post(id: $id, slug: $slug) {
      id
      title
      description
      content
      slug
      url
      postedBy {
        id
        email
        name
      }
      votes {
        id
        user {
          id
          email
        }
      }
    }
  }
`;
