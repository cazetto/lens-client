import React from 'react';
import Input from 'components/form/input';
import { Box, Text } from 'rebass';
import Button from 'components/button';

const LoginForm = props => {
  return (
    <Box>
      <Text as="h1" fontSize={5} lineHeight={4}>Login Form</Text>
      <form>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button type='button'>Login</Button>
      </form>
    </Box>
  );
}

export default LoginForm;
