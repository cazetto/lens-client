import React from 'react';
import Layout from 'components/layout';
import { Flex, Box } from '@rebass/grid';
import { Text } from 'rebass';
import { Link } from 'gatsby';
import Login from 'containers/login';
import Button from 'components/button';

const LoginPage = () => (
  <Layout>
    <Flex>
      <Box width={[1, 1, 1, 1]} px={40}>
        <Text
          fontSize={[ 3, 4, 5 ]}
          fontWeight='bold'
          lineHeight='1.2'
          color='#2d2654'>
          Sign Up Now
        </Text>
        <Box py={20}>
          <Text
            fontSize={[ 1, 2, 3 ]}
            color='#47406d'>
            Start on our free plan which gives you unlimited projects. If you are a GitHub user and not ready for private projects, choose public repos.
          </Text>
        </Box>
        <Box py={20}>
          <Link to="/signup">
            <Button type='button'>Signup</Button>
          </Link>
        </Box>
        
      </Box>
      <Box width={[1, 1, 1, 1]} px={40}>
        <Login />
      </Box>
    </Flex>
  </Layout>
);

export default LoginPage;
