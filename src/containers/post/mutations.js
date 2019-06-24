import gql from 'graphql-tag';

export const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $description: String!, $content: String!, $slug: String!, $url: String!) {
    post(title: $title, description: $description, content: $content, slug: $slug, url: $url) {
      id,
      slug
    }
  }
`;
