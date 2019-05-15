import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './loading.css';
import { ProgressCircular } from 'react-onsenui';

const Loading = ({ children }) => (
  <Container>
    <ProgressCircular indeterminate />
  </Container>
);

export default Loading;
