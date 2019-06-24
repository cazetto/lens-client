import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import Input from 'components/form/input';
import Button from 'components/button';

const CreatePostForm = ({ onChange, onSubmit, loading, error }) => {
  const [ [title, setTitle],
          [description, setDescription],
          [content, setContent],
          [slug, setSlug],
          [url, setUrl]] = [useState(''), useState(''), useState(''), useState(''), useState('')];

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
      <Text as="h1" fontSize={5} lineHeight={4}>
        Login Form
      </Text>
      <form>
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
          placeholder="Content"
          required={true}
          value={content}
          onChange={event => changeField(event.target.value, setContent)}
        />
        <Input
          type="text"
          placeholder="Slug"
          required={true}
          value={slug}
          onChange={event => changeField(event.target.value, setSlug)}
        />
        <Input
          type="text"
          placeholder="URL"
          required={true}
          value={url}
          onChange={event => changeField(event.target.value, setUrl)}
        />
        <Button type="submit" onClick={event => handleClick(event)}>
          Post
        </Button>
        {loading && <div>Unn, let me check it...</div>}
        {error && (
          <div>
            Hey, are you sure? Check your email/password and try again. Or try
            to <Link to="/forgot">recover you acount</Link>.
          </div>
        )}
      </form>
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
