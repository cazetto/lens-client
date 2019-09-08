import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import Input from 'components/form/input';
import Button from 'components/button';
import Editor from 'components/editor';
import { StyledCreatePostForm } from './create-post-form.css';

const CreatePostForm = ({ onChange, onSubmit, loading, error }) => {
  const [
    [title, setTitle],
    [description, setDescription],
    [content, setContent],
    [slug, setSlug],
    [url, setUrl],
  ] = [useState(''), useState(''), useState(''), useState(''), useState('')];

  const changeField = (value, setField) => {
    setField(value);
    onChange({ title, description, content, slug, url });
  };

  const handleClick = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Box>
      <StyledCreatePostForm>
        <Input
          type="text"
          placeholder="Title"
          required={true}
          value={title}
          onChange={event => changeField(event.target.value, setTitle)}
        />
        <Input
          type="text"
          placeholder="Description"
          required={true}
          value={description}
          onChange={event => changeField(event.target.value, setDescription)}
        />

        <Input
          type="text"
          placeholder="Url"
          required={true}
          value={url}
          onChange={event => changeField(event.target.value, setUrl)}
        />
        <Input
          type="text"
          placeholder="Slug"
          required={true}
          value={slug}
          onChange={event => changeField(event.target.value, setSlug)}
        />

        <Editor onChange={content => changeField(content, setContent)} />

        <Button type="submit" onClick={event => handleClick(event)}>
          Post
        </Button>
        {loading && <div>Please wait until I have saved your posting data</div>}
        {error && <div>Error</div>}
      </StyledCreatePostForm>
    </Box>
  );
};

CreatePostForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default CreatePostForm;
