import React from 'react';
import Layout from 'components/layout';
import { Flex, Box } from '@rebass/grid';
import { Text } from 'rebass';
import { Link } from 'gatsby';
import Signup from 'containers/signup';
import Button from 'components/button';

const SignupPage = () => (
  <Layout>
    <Flex>
      <Box width={[1, 1, 1, 1]} px={40}>
        <Text
          fontSize={[3, 4, 5]}
          fontWeight="bold"
          lineHeight="1.2"
          color="#2d2654"
        >
          Login by Facebook or Linkedin
        </Text>
        <Box py={20}>
          <Text fontSize={[1, 2, 3]} color="#47406d">
            Have you a Facebook or a Github account?
          </Text>
        </Box>
        <Box py={20}>
          <Text fontSize={1} lineHeight={1.2} color="#47406d">
            Log in by using your Facebook or Linkedin account...
          </Text>
        </Box>

        <Box py={20}>
          <Link to="/login">
            <Button type="button">Facebook</Button>
          </Link>
          <Link to="/login">
            <Button type="button">Linkedin</Button>
          </Link>
        </Box>

        <Box>
          <Text fontSize={1} lineHeight={1.2} color="#47406d">
            ...or using your credentials
          </Text>
        </Box>

        <Box py={20}>
          <Link to="/login">
            <Button type="button">Back to Login</Button>
          </Link>
        </Box>

        <Box py={20}>
          <Text fontSize={[1, 1, 1]} color="#47406d">
            By signing up, you are agreeing to our Terms of Service and Privacy
            Policy. We ask for read/write access to make your experience
            seamless on CircleCI.
          </Text>
        </Box>
      </Box>
      <Box width={[1, 1, 1, 1]} px={40}>
        <Signup />
      </Box>
    </Flex>
  </Layout>
);

export default SignupPage;
