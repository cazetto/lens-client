import React from 'react';
import Layout from 'components/layout';
import Search from 'containers/search';
import { ApolloProviderWrapper } from 'components/apollo';

const Index = () => (
  <Layout>
    <ApolloProviderWrapper>
      <Search />
    </ApolloProviderWrapper>
  </Layout>
);

export default Index;
