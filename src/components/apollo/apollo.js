import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { getToken } from 'helpers/authManager';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

ApolloProviderWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export { ApolloProviderWrapper };
