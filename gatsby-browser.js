import React from 'react';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import { ApolloProviderWrapper } from 'components/apollo';
import { StoreProvider } from 'store';

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ApolloProviderWrapper>{element}</ApolloProviderWrapper>
    </StoreProvider>
  );
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
