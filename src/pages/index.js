import React from 'react';
import Layout from 'components/layout';
import Search from 'containers/search';
import { ApolloProviderWrapper } from 'components/apollo';
import { StoreProvider } from 'context/storeContext';

const Index = () => (
  <Layout>
    <StoreProvider>
      <ApolloProviderWrapper>
        <Search />
      </ApolloProviderWrapper>
    </StoreProvider>
  </Layout>
);

export default Index;
