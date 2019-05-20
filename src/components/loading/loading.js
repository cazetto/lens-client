import React from 'react';
import { Container } from './loading.css';
import { FingerprintSpinner } from 'react-epic-spinners';

const Loading = () => (
  <Container>
    <FingerprintSpinner color="#f50057" />
  </Container>
);

export default Loading;
