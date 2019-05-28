import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { POST_QUERY } from './queries';
import Loading from 'components/loading';
import { Redirect } from '@reach/router';
import Layout from 'components/layout';
import Box from 'components/box';

const Post = props => {
  const splitedPathName = props.location.pathname.split('/');
  const slug = splitedPathName[splitedPathName.length - 1];

  return (
    <Layout>
      <Box px={2}>
        <Query query={POST_QUERY} variables={{ slug: slug }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error && !data) return <Redirect to="/404/" />;
            const { id, title, description, content } = data.post;

            return (
              <div>
                <p>Slug {slug}</p>
                <p>Id {id}</p>
                <p>Title {title}</p>
                <p>Description {description}</p>
                <p>Content {content}</p>
              </div>
            );
          }}
        </Query>
      </Box>
    </Layout>
  );
};

Post.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Post;
