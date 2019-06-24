import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = props => (
  <Container>
    <ul>
      <li>
        {!props.authenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
      </li>
      {props.authenticated && props.me && <li>{`Hello, ${props.me.name}`}</li>}
    </ul>
  </Container>
);

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  me: PropTypes.object,
};

export default Nav;
