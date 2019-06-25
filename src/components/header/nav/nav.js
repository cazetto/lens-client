import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { Location } from '@reach/router';

const Nav = props => (
  <Container>
    <ul>
      {!props.authenticated ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/create/post">
              <Button mt={-10} bg='#E91E63' variant='outline'>CREATE A POST</Button>
            </Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {props.me && <li>{`Hello, ${props.me.name}`}</li>}
        </>
      )}
    </ul>
  </Container>
);

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  me: PropTypes.object.isRequired,
};

const NavWithLocation = () => {
  return (
    <Location>
      {({ location }) => <Nav location={location} />}
    </Location>
  );
};

export default NavWithLocation;
