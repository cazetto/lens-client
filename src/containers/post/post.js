import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
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

            const contentState = convertFromRaw(JSON.parse(content));
            const editorState = EditorState.createWithContent(contentState);

            return (
              <div>
                <p>Slug {slug}</p>
                <p>Id {id}</p>
                <p>Title {title}</p>
                <p>Description {description}</p>
                <Editor editorState={editorState} readOnly={true} />
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
