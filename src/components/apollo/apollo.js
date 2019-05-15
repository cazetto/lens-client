import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'http://localhost:4000',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

ApolloProviderWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export { ApolloProviderWrapper };
