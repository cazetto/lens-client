import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Text } from 'rebass';
import Input from 'components/form/input';
import Button from 'components/button';

const SignupForm = ({ onChange, onSubmit, loading, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeField = (value, setField) => {
    setField(value);
    onChange({ name, email, password });
  };

  const handleClick = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Box>
      <Text as="h1" fontSize={5} lineHeight={4}>
        Signup Form
      </Text>
      <form>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={event => changeField(event.target.value, setName)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => changeField(event.target.value, setEmail)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => changeField(event.target.value, setPassword)}
        />
        <Button type="submit" onClick={event => handleClick(event)}>
          Signup
        </Button>
        {loading && <div>Ok, wait a bit...</div>}
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

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default SignupForm;
