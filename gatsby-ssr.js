import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import { ApolloProviderWrapper } from 'components/apollo';
import { StoreProvider } from 'store';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context and apollo client in SSR/build
  const ConnectedBody = () => (
    <StoreProvider>
      <ApolloProviderWrapper>
        {bodyComponent}
      </ApolloProviderWrapper>
    </StoreProvider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
