import React from 'react';
import Input from 'components/form/input';
import { Box, Text } from 'rebass';
import Button from 'components/button';

const SignupForm = props => {
  return (
    <Box>
      <Text as="h1" fontSize={5} lineHeight={4}>Signup Form</Text>
      <form>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button type='button'>Signup</Button>
      </form>
    </Box>
  );
}

export default SignupForm;
