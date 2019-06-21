import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import { getToken } from 'helpers/authManager';

import Me from 'containers/me';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => {
  const token = getToken();
  const isAuthenticated = Boolean(token);

  return (
    <AnimatedContainer>
      <Container>
        <Link to="/">
          <Title as="h1">{title}</Title>
        </Link>
        <Me>{me => <Nav authenticated={isAuthenticated} me={me} />}</Me>
      </Container>
    </AnimatedContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
