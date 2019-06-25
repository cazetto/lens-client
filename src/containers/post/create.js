import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import { Mutation } from 'react-apollo';
import { POST_MUTATION } from './mutations';
import { Text } from 'rebass';

import Loading from 'components/loading';
import { Redirect } from '@reach/router';
import Layout from 'components/layout';
import Box from 'components/box';

import CreatePostForm from 'components/create-post-form';

const PostCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    slug: '',
    url: '',
  });

  const { title, description, content, slug, url } = formData;

  const onCompleted = async data => {
    navigate(`/post/${data.post.slug}`);
  };

  const submit = mutation => {
    const { title, description, content, slug, url } = formData;
    if (title, description, content, slug, url) {
      mutation();
    }
  };

  return (
    <Layout>
      <Box px={2}>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ title, description, content, slug, url }}
          onCompleted={data => onCompleted(data)}
        >
          {(mutation, { loading, error }) => (
            <CreatePostForm
              onChange={setFormData}
              onSubmit={() => {
                submit(mutation);
              }}
              loading={loading}
              error={error}
            />
          )}
        </Mutation>
      </Box>
    </Layout>
  );
};

export default PostCreate;
