import React from 'react';
import { Router } from '@reach/router';
import Layout from 'components/layout';
import Search from 'containers/search';
import Refraction from 'containers/search';

const App = () => (
  <Layout>
    <Router>
      <Search path="/" />
      <Refraction path="/ref" />
    </Router>
  </Layout>
);

export default App;
