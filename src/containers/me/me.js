import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { USER_ME_QUERY } from './queries';

const Me = props => {
  return (
    <Query query={USER_ME_QUERY}>
      {({ data }) => {
        const me = data && data.me;
        return props.children(me);
      }}
    </Query>
  );
};

Me.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Me;
